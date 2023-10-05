export const changeIframeLayout = Object.freeze({
  closeChat: () =>
    window.parent.postMessage(
      {
        type: "changeLayout",
        message: "closeChat",
        payload: null,
      },
      "*"
    ),
  openConversation: () =>
    window.parent.postMessage(
      {
        type: "changeLayout",
        message: "openConversation",
        payload: null,
      },
      "*"
    ),
  expandFullScreen: () =>
    window.parent.postMessage(
      {
        type: "changeLayout",
        message: "expandFullScreen",
        payload: null,
      },
      "*"
    ),
  collapseFullScreen: () =>
    window.parent.postMessage(
      {
        type: "changeLayout",
        message: "collapseFullScreen",
        payload: null,
      },
      "*"
    ),
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
