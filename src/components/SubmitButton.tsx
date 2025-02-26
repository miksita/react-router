type SubmitButtonProps = {
    label: string;
  };
  
  export default function SubmitButton({ label }: SubmitButtonProps) {
    return (
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {label}
      </button>
    );
  }