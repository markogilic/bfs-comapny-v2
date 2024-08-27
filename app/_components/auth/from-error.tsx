import { BiError } from 'react-icons/bi';

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-red-200 p-3 font-semibold rounded-md flex items-center gap-x-2  text-sm text-red-600">
      <BiError size={16} />
      <span>{message}</span>
    </div>
  );
};

export default FormError;
