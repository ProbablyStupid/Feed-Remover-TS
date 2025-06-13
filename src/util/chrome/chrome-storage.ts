/**
 * Promise wrapper to get a value to a key or multiple keys from
 * chrome.storage.local
 * 
 * @param keys 
 * @returns Promise<T>
 */
export async function getLocal<T>(keys: string[] | string): Promise<T> {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(keys, (result) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(result as T);
            }
        })
    });
}