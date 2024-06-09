import { FaStar } from 'react-icons/fa';

const StarReview = ({ value }: { value: number }) => {
  return (
    <div className="flex justify-center items-center gap-1 mt-4">
      {Array.from({ length: 5 }, (_, index) => {
        return (
          <FaStar
            key={index}
            color={index < value ? '#fbab42' : '#E4E5E9'}
            size={22}
          />
        );
      })}
    </div>
  );
};

export default StarReview;
