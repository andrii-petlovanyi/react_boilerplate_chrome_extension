import { useState, useEffect } from 'react';
import { StorageData } from '../types';

/**
 * Custom hook for managing Chrome extension storage
 * 
 * @template T - Type of the stored data, must extend StorageData
 * 
 * @param {string} key - Storage key to use
 * @param {T} initialValue - Initial value if no data exists in storage
 * @returns {[T, (value: T) => void]} Tuple containing the current value and setter function
 * 
 * @example
 * // Using the hook to manage storage
 * const [value, setValue] = useStorage<{ count: number }>('counter', { count: 0 });
 * 
 * // Updating storage
 * setValue({ count: value.count + 1 });
 */
export function useStorage<T extends StorageData>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    /**
     * Loads data from Chrome storage
     */
    const loadData = () => {
      chrome.storage.local.get([key], (result) => {
        if (result[key] !== undefined) {
          setValue(result[key]);
        }
      });
    };

    /**
     * Listens for storage changes
     * 
     * @param {Object.<string, chrome.storage.StorageChange>} changes - Object containing changes
     */
    const handleStorageChange = (changes: { [key: string]: chrome.storage.StorageChange }) => {
      if (changes[key]) {
        setValue(changes[key].newValue);
      }
    };

    loadData();
    chrome.storage.local.onChanged.addListener(handleStorageChange);
    
    return () => chrome.storage.local.onChanged.removeListener(handleStorageChange);
  }, [key]);

  /**
   * Updates both local state and Chrome storage
   * 
   * @param {T} newValue - New value to store
   */
  const setStorageValue = (newValue: T) => {
    setValue(newValue);
    chrome.storage.local.set({ [key]: newValue });
  };

  return [value, setStorageValue] as const;
} 