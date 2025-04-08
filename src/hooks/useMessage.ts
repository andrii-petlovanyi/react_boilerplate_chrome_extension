import { useEffect, useCallback } from 'react';
import { BaseMessage, MessageResponse, MessageListener } from '@/types';

/**
 * Custom hook for handling Chrome extension message passing
 * 
 * @template T - Type of the message payload
 * @template R - Type of the response payload
 * 
 * @param {MessageListener<T, R>} listener - Function that handles incoming messages
 * @returns {<T2, R2>(message: BaseMessage<T2>) => Promise<R2>} Function to send messages
 * 
 * @example
 * // Using the hook to handle messages
 * const sendMessage = useMessage<string, number>((message) => {
 *   if (message.type === 'SOME_TYPE') {
 *     return 42;
 *   }
 *   return 0;
 * });
 * 
 * // Sending a message
 * const response = await sendMessage({ type: 'SOME_TYPE', payload: 'data' });
 */
export function useMessage<T, R>(listener: MessageListener<T, R>) {
  useEffect(() => {
    /**
     * Internal message handler for Chrome runtime
     * 
     * @param {BaseMessage<T>} message - Incoming message
     * @param {chrome.runtime.MessageSender} sender - Message sender information
     * @param {(response?: MessageResponse<R>) => void} sendResponse - Callback to send response
     * @returns {boolean} Whether the response will be sent asynchronously
     */
    const messageHandler = (
      message: BaseMessage<T>,
      sender: chrome.runtime.MessageSender,
      sendResponse: (response?: MessageResponse<R>) => void
    ) => {
      const response = listener(message);
      
      if (response instanceof Promise) {
        response.then(sendResponse);
        return true; // Indicates async response
      }
      
      sendResponse(response);
      return false;
    };

    chrome.runtime.onMessage.addListener(messageHandler);
    return () => chrome.runtime.onMessage.removeListener(messageHandler);
  }, [listener]);

  /**
   * Function to send messages to other parts of the extension
   * 
   * @template T2 - Type of the message payload
   * @template R2 - Type of the response payload
   * @param {BaseMessage<T2>} message - Message to send
   * @returns {Promise<R2>} Promise that resolves with the response
   */
  const sendMessage = useCallback(<T2, R2>(message: BaseMessage<T2>): Promise<R2> => {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage(message, resolve);
    });
  }, []);

  return sendMessage;
} 