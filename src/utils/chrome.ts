/**
 * Get current active tab
 */
export const getCurrentTab = async (): Promise<chrome.tabs.Tab> => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
};

/**
 * Execute script in tab
 */
export const executeScript = async (tabId: number, func: () => void) => {
  await chrome.scripting.executeScript({
    target: { tabId },
    func,
  });
};

/**
 * Get extension URL
 */
export const getExtensionUrl = (path: string): string => {
  return chrome.runtime.getURL(path);
}; 