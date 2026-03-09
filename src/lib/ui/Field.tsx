import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Input(props: InputProps) {
  return <input className="field" {...props} />;
}

export function Textarea(props: TextareaProps) {
  return <textarea className="field field--textarea" {...props} />;
}
