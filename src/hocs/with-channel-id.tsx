import MessageProvider from "@/providers/message-provider";

interface ChannelIdWrapperProps {
  channel?: string;
}

export interface MessagesChannelProps {
  channel: string;
}

export default function withChannelId(
  Component: React.FC<MessagesChannelProps>
) {
  return function ChannelIdWrapper(props: ChannelIdWrapperProps) {
    return (
      props.channel && (
        <MessageProvider channelId={props.channel}>
          <Component {...props} channel={props.channel} />
        </MessageProvider>
      )
    );
  };
}
