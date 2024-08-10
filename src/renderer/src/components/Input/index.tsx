import { Component, createSignal } from 'solid-js';
import Send from '@renderer/assets/icons/send.svg';

interface InputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
}

const Input: Component<InputProps> = (props) => {
  const [value, setValue] = createSignal('');

  const onChange = (e: Event) => {
    setValue((e.target as HTMLInputElement)?.value);
  };

  const onSubmit = () => {
    if (props.onSubmit && value()) {
      props.onSubmit(value() as string);
      setValue('');
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div class="flex flex-row justify-between items-center h-16 px-4 gap-2 box-border">
      <input
        type="text"
        class="border-[1px] border-stone-500 bg-transparent rounded-full p-2 flex-1 outline-none text-stone-200 px-4 h-9"
        onInput={onChange}
        placeholder={props.placeholder}
        onKeyPress={onKeyDown}
        value={value()}
      />
      <button
        class="bg-stone-50 rounded-full h-9 w-9 box-border flex justify-center items-center transition-all ease-in-out duration-100 hover:brightness-90 active:brightness-75"
        onClick={onSubmit}
      >
        <img src={Send} class="object-cover w-8 h-8"></img>
      </button>
    </div>
  );
};

export default Input;
