import { useForm, SubmitHandler } from 'react-hook-form';
import InputField from '../components/InputField';
import TextareaField from '../components/TextareaField';
import SubmitButton from '../components/SubmitButton';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form Data:', data);
    alert('Form submitted successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1>Форма для обращения в поддержку</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Ваше имя"
          name="name"
          register={register}
          error={errors.name}
          required
        />
        <InputField
          label="Email"
          name="email"
          register={register}
          error={errors.email}
          type="email"
          required
          pattern={{
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Введите корректный email',
          }}
        />
        <TextareaField
          label="Обращение"
          name="message"
          register={register}
          error={errors.message}
          required
          minLength={10}
        />
        <SubmitButton label="Submit" />
      </form>
    </div>
  );
}