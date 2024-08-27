import { FaCheckCircle } from 'react-icons/fa';

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 font-semibold rounded-md flex items-center gap-x-2  text-sm text-emerald-500">
      <FaCheckCircle size={16} />
      <span>{message}</span>
    </div>
  );
};

export default FormSuccess;
