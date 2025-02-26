import { UseFormRegister, FieldError } from 'react-hook-form';

type TextareaFieldProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  required?: boolean; // Пропс для обязательности поля
  minLength?: number; // Пропс для минимальной длины
};

export default function TextareaField({
  label,
  name,
  register,
  error,
  required = false,
  minLength,
}: TextareaFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">{label}</label>
      <textarea
        {...register(name, {
          required: required ? `${label} не введено` : false,
          minLength: minLength
            ? {
                value: minLength,
                message: `Обращение должно содержать не менее 10 символов`,
              }
            : undefined,
        })}
        className={`w-full p-2 border rounded ${error ? 'border-red-500' : 'border-gray-300'}`}
        rows={4}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}