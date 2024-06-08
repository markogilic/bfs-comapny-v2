import Image from 'next/image';

interface GoalCardProps {
  children: React.ReactNode;
  imagePath: string;

  title: string;
}

const GoalCard = ({ children, imagePath, title }: GoalCardProps) => {
  return (
    <article className="flex flex-col justify-center items-center gap-[16px] w-[320px] text-center">
      <Image src={imagePath} alt={title} />
      <h3 className="text-[18px] font-semibold">{title}</h3>
      <p>{children}</p>
    </article>
  );
};

export default GoalCard;
