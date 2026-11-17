// Keep the static loader visible until Flutter has painted its first frame.
(() => {
  window.addEventListener('flutter-first-frame', () => {
    document.getElementById('app-loading')?.remove();
  }, {once: true});

  window.chaoskroeteLoadingFailed = () => {
    if (!document.getElementById('app-loading')) return;
    document.getElementById('loading-message').hidden = true;
    document.querySelector('.loading-dots').hidden = true;
    document.getElementById('loading-error').hidden = false;
    document.getElementById('loading-retry').hidden = false;
  };
  document.getElementById('loading-retry').addEventListener('click', () => window.location.reload());
  window.addEventListener('error', event => {
    if (event.target instanceof HTMLScriptElement) window.chaoskroeteLoadingFailed();
  }, true);
  window.addEventListener('unhandledrejection', () => window.chaoskroeteLoadingFailed());
})();
