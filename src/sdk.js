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

function initChat(options) {
  options = mergeOptions(options);

  const root = createRootElement();
  const style = createStyle();
  const iframe = createIframe(options);

  document.head.appendChild(style);
  root.appendChild(iframe);

  root.addEventListener("click", () => {
    iframe.className = "chat_bounce_in";
    iframe.style.display = "block";
  });

  document.getElementById(options.container).appendChild(root);

  window.addEventListener("message", (event) => {
    if (event.data === "closeChat") {
      iframe.className = "chat_bounce_out";
      setTimeout(() => {
        iframe.style.display = "none";
        iframe.style.width = options.customStyle.width;
      }, 200);
    } else if (event.data === "openConversation") {
      iframe.style.width = "720px";
    }
  });
}

window.initChat = initChat;
