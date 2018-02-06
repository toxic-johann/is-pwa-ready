import store from 'store';

export default async function() {
  const isManifestLinkSupport = document.createElement('link').relList.supports(
    'manifest');
  const isBeforeInstallPromptEventSupport = 'BeforeInstallPromptEvent' in window;
  await store.put('feature', Number(isBeforeInstallPromptEventSupport), 'BeforeInstallPromptEvent');
  await store.put('feature', Number(isManifestLinkSupport), 'manifestLink');
  await store.put('feature', Number(isManifestLinkSupport && isBeforeInstallPromptEventSupport), 'web-app-manifest');
  await store.put('feature', Number('getInstalledRelatedApps' in navigator), 'getInstalledRelatedApps');
}
