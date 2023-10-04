export const changeIframeLayout = Object.freeze({
  closeChat: () => window.parent.postMessage("closeChat", "*"),
  openConversation: () => window.parent.postMessage("openConversation", "*"),
  expandFullScreen: () => window.parent.postMessage("expandFullScreen", "*"),
  collapseFullScreen: () =>
    window.parent.postMessage("collapseFullScreen", "*"),
});

export const getDataFromIframe = Object.freeze({
  getIframeData: () => {
    const urlParams = new URLSearchParams(window.location.search);
    const iframeData = urlParams.get("iframeData");
    return JSON.parse(iframeData ?? "{}");
  },
  getIframeDataByKey: (key: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    const iframeData = urlParams.get("iframeData");
    const parsedIframeData = JSON.parse(iframeData ?? "{}");
    return parsedIframeData[key];
  },
});
