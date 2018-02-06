import store from 'store';
function storageEstimateWrapper() {
  if ('storage' in navigator && 'estimate' in navigator.storage) {
    store.put('feature', 1, 'storage');
    store.put('feature', 1, 'storage.estimate');
    // We've got the real thing! Return its response.
    return navigator.storage.estimate();
  }

  if ('webkitTemporaryStorage' in navigator &&
    'queryUsageAndQuota' in navigator.webkitTemporaryStorage) {
    // Return a promise-based wrapper that will follow the expected interface.
    store.put('feature', 0.5, 'storage');
    store.put('feature', 0.5, 'storage.estimate');
    return new Promise(function(resolve, reject) {
      navigator.webkitTemporaryStorage.queryUsageAndQuota(
        function(usage, quota) {
          resolve({ usage, quota });
        },
        reject
      );
    });
  }
  // If we can't estimate the values, return a Promise that resolves with NaN.
  return Promise.resolve({ usage: NaN, quota: NaN });
}

export default async function() {
  const { usage, quota } = await storageEstimateWrapper();
  if (Number.isNaN(usage) || Number.isNaN(quota)) {
    store.put('feature', 0, 'storage');
    store.put('feature', 0, 'storage.estimate');
  }
  console.log({ usage, quota });
}
