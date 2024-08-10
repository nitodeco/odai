import { Component } from 'solid-js';
import { onCleanup, createEffect, createSignal } from 'solid-js';

interface ChatProps {
  children: any;
}

const Chat: Component<ChatProps> = (props) => {
  let chatRef: HTMLDivElement;
  const [isOverflowing, setIsOverflowing] = createSignal(false);

  createEffect(() => {
    if (chatRef) {
      chatRef.scrollTop = chatRef.scrollHeight;
      const isContentOverflowing = chatRef.scrollHeight > chatRef.clientHeight;
      setIsOverflowing(isContentOverflowing);
    }
  });

  onCleanup(() => {
    // Clean up any resources here
  });

  return (
    <div
      class="flex flex-col w-full gap-2 flex-1 px-4 py-4 overflow-auto scroll-smooth scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full"
      ref={(scrollContainer) => {
        chatRef = scrollContainer;
      }}
    >
      {props.children}
    </div>
  );
};

export default Chat;
