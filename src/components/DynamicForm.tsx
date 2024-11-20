import React from 'react';
import { useForm, FieldError } from 'react-hook-form';

interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'select' | 'radio' | 'textarea';
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: { pattern: string; message: string };
}

interface FormSchema {
  formTitle: string;
  formDescription: string;
  fields: FormField[];
}

const DynamicForm: React.FC<{
  schema: FormSchema;
  onSubmit: (data: any) => void;
}> = ({ schema, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'text':
      case 'email':
        return (
          <input
            type={field.type}
            {...register(field.id, {
              required: field.required && 'This field is required',
              pattern: field.validation
                ? {
                    value: new RegExp(field.validation.pattern),
                    message: field.validation.message,
                  }
                : undefined,
            })}
            placeholder={field.placeholder}
            className="w-full p-2 border rounded"
          />
        );

      case 'select':
        return (
          <select
            {...register(field.id, {
              required: field.required && 'This field is required',
            })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select...</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'radio':
        return (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register(field.id, {
                    required: field.required && 'This field is required',
                  })}
                  value={option.value}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        );

      case 'textarea':
        return (
          <textarea
            {...register(field.id, {
              required: field.required && 'This field is required',
            })}
            placeholder={field.placeholder}
            className="w-full p-2 border rounded h-32"
          />
        );

      default:
        return null;
    }
  };

  const getErrorMessage = (error: FieldError | undefined): string => {
    if (!error) return '';
    return error.message as string || 'This field is required';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-bold">{schema.formTitle}</h2>
      <p className="text-gray-600">{schema.formDescription}</p>

      {schema.fields.map((field) => (
        <div key={field.id} className="space-y-2">
          <label className="block font-medium">
            {field.label}
            {field.required && <span className="text-red-500">*</span>}
          </label>
          {renderField(field)}
          {errors[field.id] && (
            <p className="text-red-500 text-sm">
              {getErrorMessage(errors[field.id] as FieldError)}
            </p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;