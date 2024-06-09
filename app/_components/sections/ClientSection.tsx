import SubHeading from '../ui/subHeading';
import StudentCard from '../ui/StudentCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { students } from '@/lib/data';

const ClientSection = () => {
  return (
    <section className="px-[150px] py-[96px] ">
      <SubHeading>ZADOVOLJNI POLAZNICI</SubHeading>

      <Carousel className="px-[240px]">
        <div className="flex">
          <CarouselContent className="">
            {students.map((student, index) => (
              <CarouselItem key={index} className=" lg:basis-1/3">
                <StudentCard student={student} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};

export default ClientSection;
