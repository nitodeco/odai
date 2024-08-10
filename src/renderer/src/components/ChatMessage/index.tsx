import { Component, onMount, createSignal } from 'solid-js';
import type Message from '@renderer/types/message';
import convertToMarkdown from '@renderer/utilities/markdown';
import Loader from '../Loader';

interface MessageProps {
  message: Message;
}

const ChatMessage: Component<MessageProps> = (props) => {
  const [message, setMessage] = createSignal<string>(props.message.message);

  onMount(() => {
    if (props.message.message !== 'loading') {
      setMessage(convertToMarkdown(props.message.message));
    }
  });

  return (
    <div
      class={`flex w-full items-center ${props.message.sender == 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        class={`flex max-w-[75%] rounded-2xl py-2 px-4 min-h-[40px] h-[40px] ${props.message.sender == 'user' ? 'bg-stone-600' : 'bg-slate-600'}`}
      >
        {message() !== 'loading' ? (
          <div innerHTML={message()} class="text-stone-50"></div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
