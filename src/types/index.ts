/**
 * Base interface for storage data
 * @interface StorageData
 */
export interface StorageData {
  [key: string]: any;
}

/**
 * Base interface for messages
 * 
 * @template T - Type of the message payload
 * @interface BaseMessage
 */
export interface BaseMessage<T = void> {
  type: string;
  payload?: T;
}

/**
 * Type for message responses
 * 
 * @template T - Type of the response payload
 * @typedef {T | Promise<T>} MessageResponse
 */
export type MessageResponse<T> = T | Promise<T>;

/**
 * Type for message listener function
 * 
 * @template T - Type of the message payload
 * @template R - Type of the response payload
 * @typedef {(message: BaseMessage<T>) => MessageResponse<R>} MessageListener
 */
export type MessageListener<T, R> = (message: BaseMessage<T>) => MessageResponse<R>;

/**
 * Type for sending messages
 * 
 * @template T - Type of the message payload
 * @template R - Type of the response payload
 * @typedef {(message: BaseMessage<T>) => MessageResponse<R>} SendMessageFunction
 */
export type SendMessageFunction = <T, R>(message: BaseMessage<T>) => MessageResponse<R>;

/**
 * Type for sending messages to specific tabs
 * 
 * @template T - Type of the message payload
 * @template R - Type of the response payload
 * @typedef {(tabId: number, message: BaseMessage<T>) => MessageResponse<R>} TabMessageFunction
 */
export type TabMessageFunction = <T, R>(tabId: number, message: BaseMessage<T>) => MessageResponse<R>;

// Storage types
export interface StorageItems {
  [key: string]: unknown;
}

// Add more types as needed

// Типи для хуків 