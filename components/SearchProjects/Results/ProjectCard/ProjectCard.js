import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({
  title,
  destination,
  image,
  category,
  location,
  date,
}) => {
  return (
    <a
      className="flex flex-col items-center justify-start w-full h-[250px] md:h-[300px] bg-black bg-opacity-30 hover:no-underline border border-solid border-black"
      href={destination}
    >
      <div className="flex h-[220px] md:h-[270px] w-full mx-5 relative justify-center items-center mix-blend-soft-light">
        <Image
          priority
          src={image}
          fill
          sizes="300px"
          className="object-cover"
          alt=""
        />
      </div>
      <div className="flex h-[220px] md:h-[270px] w-full max-w-[480px] mx-5 absolute justify-center items-center">
        <div className="absolute text-center my-3 text-white text-xl">
          {title}
        </div>
      </div>
      <div className="w-full h-[30px] bg-pink-50 flex justify-center items-center border-t border-solid border-black">
        <div className="flex h-full flex-row text-black w-full uppercase tracking-widest text-xxs">
          <div className="w-1/3 h-full flex justify-center items-center border-r border-black">
            <div>{category}</div>
          </div>
          <div className="w-1/3 h-full flex justify-center items-center border-r border-black">
            <div>{location}</div>
          </div>
          <div className="w-1/3 h-full flex justify-center items-center border-black">
            <div>{date}</div>
          </div>
        </div>
      </div>
    </a>
  );
};
