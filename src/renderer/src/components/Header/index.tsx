import { Component } from 'solid-js';

interface HeaderProps {
  onNewChat: () => void;
}

const Header: Component<HeaderProps> = (props) => {
  return (
    <header class="flex justify-between items-center px-4 py-2 bg-stone-700 h-8 brightness-75 border-solid border-b-[1px] border-b-stone-500">
      <div></div>
      <div class="text-white cursor-pointer" onClick={props.onNewChat}>
        New
      </div>
    </header>
  );
};

export default Header;
