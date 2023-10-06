import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface MessageContextProps {
  fetching: {
    channelInfo: boolean;
    messages: boolean;
  };
  conversationInfo?: {
    name: string;
    avatar: string;
  };
  messages?: any[];
}

interface MessageProviderProps {
  children: ReactNode;
  channelId: string;
}

const mockGetMessages = async (channelId: string) => {
  const mockMessages = Array.from({ length: 10 });
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve({
        data: mockMessages.map((_, idx) => ({
          id: idx,
          message: `message - ${idx}`,
        })),
      });
    }, 150);
  });
};

const mockGetChannelInfo = async (channelId: string) => {
  const { data } = await fetch(`https://reqres.in/api/users/${channelId}`).then(
    (res) => res.json()
  );
  return data;
};

const MessageContext = createContext<MessageContextProps>({
  fetching: {
    channelInfo: false,
    messages: false,
  },
  conversationInfo: {
    name: "",
    avatar: "",
  },
});

export default function MessageProvider({
  children,
  channelId,
}: MessageProviderProps) {
  const [fetching, setFetching] = useState({
    channelInfo: false,
    messages: false,
  });
  const [conversationInfo, setConversationInfo] = useState<any>();
  const [messages, setMessages] = useState<any[]>();

  useEffect(() => {
    (async () => {
      try {
        setFetching((prev) => ({ ...prev, channelInfo: true }));
        const data = await mockGetChannelInfo(channelId);
        setConversationInfo({
          name: data.first_name + " " + data.last_name,
          avatar: data.avatar,
        });
      } finally {
        setFetching((prev) => ({ ...prev, channelInfo: false }));
      }
    })();
  }, [channelId]);

  useEffect(() => {
    (async () => {
      try {
        setFetching((prev) => ({ ...prev, messages: true }));
        const res = await mockGetMessages(channelId);
        setMessages(res.data);
      } finally {
        setFetching((prev) => ({ ...prev, messages: false }));
      }
    })();
  }, [channelId]);

  return (
    <MessageContext.Provider
      value={{
        fetching,
        conversationInfo,
        messages,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (context === undefined) {
    throw new Error("useMessage must be used within a MessageProvider");
  }
  return context;
};
