import React from 'react';

type InputProps = {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string | null;
  textarea?: boolean;
  rows?: number;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  const { label, error, textarea, rows = 4, className = '', ...rest } = props;

  const base = 'w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-200';
  const errorCls = error ? 'border-red-500' : 'border-gray-300';

  return (
    <div className={className}>
      {label ? <label className="block text-sm font-medium">{label}</label> : null}
      {textarea ? (
        <textarea {...(rest as any)} rows={rows} className={`${base} ${errorCls}`} />
      ) : (
        <input {...(rest as any)} className={`${base} ${errorCls}`} />
      )}
      {error ? <div className="text-red-600 text-xs mt-1">{error}</div> : null}
    </div>
  );
}

export default Input;
