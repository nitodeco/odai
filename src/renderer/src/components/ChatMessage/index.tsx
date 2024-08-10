import { Component } from 'solid-js';
import type Message from '@renderer/types/message';
import convertToMarkdown from '@renderer/utilities/markdown';

interface MessageProps {
  message: Message;
}

const ChatMessage: Component<MessageProps> = (props) => {
  const message = convertToMarkdown(props.message.message);

  return (
    <div
      class={`flex w-full items-center ${props.message.sender == 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        class={`max-w-[75%] rounded-2xl py-2 px-4 ${props.message.sender == 'user' ? 'bg-stone-600' : 'bg-slate-600'}`}
      >
        <div innerHTML={message} class="text-stone-50"></div>
      </div>
    </div>
  );
};

export default ChatMessage;
