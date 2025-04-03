function connectPhantomMobile() {
  const appUrl = encodeURIComponent(window.location.href);
  const phantomDeepLink = `https://phantom.app/ul/v1/connect?app_url=${appUrl}&redirect_link=${appUrl}`;

  window.location.href = phantomDeepLink;
}
