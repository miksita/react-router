import { UseFormRegister, FieldError } from 'react-hook-form';

type InputFieldProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  type?: string;
  required?: boolean; 
  minLength?: number;
  pattern?: { value: RegExp; message: string }; 
};

export default function InputField({
  label,
  name,
  register,
  error,
  type = 'text',
  required = false,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        {...register(name, {
          required: required ? `${label} не введено` : false,
          
        })}
        className={`w-full p-2 border rounded ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}