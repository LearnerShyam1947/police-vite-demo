import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import clsx from 'clsx';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  as?: string;
  placeholder?: string;
  className?: string;
  rows?: number;
  children?: React.ReactNode;
}

export default function FormField({
  label,
  name,
  type = 'text',
  as,
  placeholder,
  className,
  rows,
  children,
}: FormFieldProps) {
  const baseInputClasses = "w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors";
  const { touched, errors } = useFormikContext();

  return (
    <div className={clsx("space-y-1", className)}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        as={as}
        rows={rows}
        placeholder={placeholder}
        className={clsx(
          baseInputClasses,
          as === 'select' && "pr-10",
          as === 'textarea' && "resize-none",
          {
            'border-red-600': touched[name] && errors[name], 
          },
          "w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-900"
        )}
      >
        {children}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-red-600 mt-1"
      />
    </div>
  );
}
