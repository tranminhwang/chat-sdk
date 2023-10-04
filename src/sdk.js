const DEFAULT_OPTIONS = {
  container: "display-chat",
  customStyle: {
    width: "375px",
    height: "580px",
    zIndex: "9999",
    right: "1rem",
    bottom: "16px",
    borderRadius: "1rem",
  },
  credentials: {
    bizId: "5f9b2b9b9c6d2a0017a1e2a5",
    userId: "6d2a0017a1e2a65f9b2b9b9c",
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    refreshToken: "UzI1NiIsInR5cCI6IkpXVCJ9eyJhbGciOiJI",
  },
};

function mergeOptions(options = DEFAULT_OPTIONS) {
  return {
    ...DEFAULT_OPTIONS,
    ...options,
    customStyle: {
      ...DEFAULT_OPTIONS.customStyle,
      ...options.customStyle,
    },
  };
}

function createIframe({ customStyle }) {
  const { width, height, zIndex, right, bottom, borderRadius } = customStyle;

  const iframe = document.createElement("iframe");
  iframe.src = "http://localhost:3000";

  iframe.style.border = "0px";
  iframe.style.background = "white";
  iframe.style.position = "fixed";
  iframe.style.boxShadow = "0 4px 12px 0 rgba(0, 0, 0, .15)";
  iframe.style.overflow = "hidden";
  iframe.style.display = "none";

  iframe.style.width = width;
  iframe.style.height = height;
  iframe.style.zIndex = zIndex;
  iframe.style.right = right;
  iframe.style.bottom = bottom;
  iframe.style.borderRadius = borderRadius;

  return iframe;
}

function createRootElement() {
  const chatRootElement = document.createElement("div");
  chatRootElement.id = "pito-chat";
  chatRootElement.style.position = "relative";
  chatRootElement.style.minWidth = "100%";
  chatRootElement.style.minHeight = "100%";

  return chatRootElement;
}

function createStyle() {
  const style = document.createElement("style");

  style.innerHTML = `
    @keyframes bounce_in {
      0% {
        opacity: 0;
        transform: scale(0, 0);
        transform-origin: bottom right;
      }
      50% {
        transform: scale(1.03, 1.03);
        transform-origin: bottom right;
      }
      100% {
        opacity: 1;
        transform: scale(1, 1);
        transform-origin: bottom right;
      }
    }

    @keyframes bounce_out {
      0% {
        opacity: 1;
        transform: scale(1, 1);
        transform-origin: bottom right;
      }
      100% {
        opacity: 0;
        transform: scale(0, 0);
        transform-origin: bottom right;
        display: none;
      }
    }

    .chat_bounce_in {
      animation-duration: 300ms;
      animation-name: bounce_in;
      transition-timing-function: ease-in;
    }


    .chat_bounce_out {
      animation-duration: 300ms;
      animation-name: bounce_out;
      transition-timing-function: ease-in;
    }
`;
  return style;
}

function listenerEventChangeLayout(event, iframe, options) {
  switch (event.data) {
    case "closeChat": {
      iframe.className = "chat_bounce_out";
      setTimeout(() => {
        iframe.style.display = "none";
        iframe.style.width = options.customStyle.width;
        iframe.style.height = options.customStyle.height;
        iframe.style.right = options.customStyle.right;
        iframe.style.bottom = options.customStyle.bottom;
        iframe.style.borderRadius = options.customStyle.borderRadius;
      }, 200);
      break;
    }
    case "openConversation": {
      iframe.style.width = "720px";
      break;
    }
    case "expandFullScreen": {
      const windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      iframe.style.width = `${windowWidth}px`;
      iframe.style.height = `${windowHeight}px`;
      iframe.style.bottom = "0px";
      iframe.style.right = "0px";
      iframe.style.borderRadius = "0px";
      break;
    }
    case "collapseFullScreen": {
      iframe.style.width = "720px";
      iframe.style.height = options.customStyle.height;
      iframe.style.right = options.customStyle.right;
      iframe.style.bottom = options.customStyle.bottom;
      iframe.style.borderRadius = options.customStyle.borderRadius;
      break;
    }
  }
}

function initChat(options) {
  options = mergeOptions(options);

  const root = createRootElement();
  const style = createStyle();
  const iframe = createIframe(options);

  iframe.onload = () =>
    iframe.contentWindow.postMessage(options.credentials, "*");

  document.head.appendChild(style);
  root.appendChild(iframe);

  root.addEventListener("click", () => {
    iframe.className = "chat_bounce_in";
    iframe.style.display = "block";
  });

  document.getElementById(options.container).appendChild(root);

  window.addEventListener("message", (event) => {
    listenerEventChangeLayout(event, iframe, options);
  });
}

window.initChat = initChat;
