import { Component } from 'solid-js';
import type Message from '@renderer/types/message';

interface MessageProps {
  message: Message;
}

const ChatMessage: Component<MessageProps> = (props) => {
  return (
    <div
      class={`flex w-full items-center ${props.message.sender == 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        class={`max-w-[75%] rounded-2xl py-2 px-4 ${props.message.sender == 'user' ? 'bg-stone-600' : 'bg-slate-600'}`}
      >
        <p class="text-stone-200">{props.message.message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
