import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

import type Message from './types/message';

import Chat from './components/Chat';
import Input from './components/Input';
import ChatMessage from './components/ChatMessage';
import Header from './components/Header';

const App: Component = () => {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const [messages, setMessages] = createSignal<Message[]>([]);

  const newChat = (): void => {
    setMessages([]);
  };

  const onInputSubmit = (message: string): void => {
    setMessages([...messages(), { message, sender: 'user' }]);
  };

  return (
    <>
      <main class="h-screen flex flex-col box-border bg-stone-800">
        <Header onNewChat={newChat} />
        <Chat>{messages().map((message) => () => <ChatMessage message={message} />)}</Chat>
        <Input onSubmit={onInputSubmit} />
      </main>
    </>
  );
};

export default App;
