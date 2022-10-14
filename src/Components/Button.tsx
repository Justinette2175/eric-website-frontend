import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <button
      {...props}
      className={`py-2 px-4 bg-white rounded-sm border-black border-2 ${
        props.disabled ? "opacity-30" : "hover:bg-gray-100 active:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
}
