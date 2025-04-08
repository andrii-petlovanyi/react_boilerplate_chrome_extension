import { StorageData } from '@/types';

/**
 * Service object for managing Chrome extension storage operations
 * 
 * @namespace storageService
 */
export const storageService = {
  /**
   * Retrieves data from Chrome storage
   * 
   * @template T - Type of the data to retrieve
   * @param {string} key - Storage key
   * @returns {Promise<T | null>} Promise that resolves with the stored data or null if not found
   * 
   * @example
   * const data = await storageService.get<{ count: number }>('counter');
   */
  get: async <T extends StorageData>(key: string): Promise<T | null> => {
    const result = await chrome.storage.local.get([key]);
    return result[key] || null;
  },

  /**
   * Stores data in Chrome storage
   * 
   * @template T - Type of the data to store
   * @param {string} key - Storage key
   * @param {T} value - Data to store
   * @returns {Promise<void>} Promise that resolves when storage is complete
   * 
   * @example
   * await storageService.set('counter', { count: 42 });
   */
  set: async <T extends StorageData>(key: string, value: T): Promise<void> => {
    await chrome.storage.local.set({ [key]: value });
  },

  /**
   * Removes data from Chrome storage
   * 
   * @param {string} key - Storage key to remove
   * @returns {Promise<void>} Promise that resolves when removal is complete
   * 
   * @example
   * await storageService.remove('counter');
   */
  remove: async (key: string): Promise<void> => {
    await chrome.storage.local.remove(key);
  },

  /**
   * Clears all data from Chrome storage
   * 
   * @returns {Promise<void>} Promise that resolves when storage is cleared
   * 
   * @example
   * await storageService.clear();
   */
  clear: async (): Promise<void> => {
    await chrome.storage.local.clear();
  },
}; 