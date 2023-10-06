import React, { useEffect } from "react";

const MessageInput = () => {
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!textAreaRef.current) return;
    textAreaRef.current.addEventListener("input", function () {});
  }, []);

  return (
    <div className="w-full flex bg-transparent rounded-xl px-2 border">
      <textarea
        ref={textAreaRef}
        className="flex-1 flex items-center max-h-16 h-8 min-h-8 no-scrollbar bg-transparent outline-none w-full text-sm resize-none"
        autoFocus
      />
      <div className="flex items-end justify-end">aa</div>
    </div>
  );
};

export default MessageInput;
