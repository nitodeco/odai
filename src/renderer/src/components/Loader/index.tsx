import { Component } from 'solid-js';

const Loader: Component = () => {
  return (
    <div class="w-8 h-full flex flex-col justify-center items-center align-middle">
      <div class="w-4 h-1 bg-white animate-spin"></div>
    </div>
  );
};

export default Loader;
