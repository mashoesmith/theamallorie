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
      className="flex flex-row items-center justify-center w-full h-[300px] bg-black bg-opacity-20"
      href={destination}
    >
      <div className="flex h-full w-full relative justify-center align-middle mix-blend-soft-light">
        <Image
          priority
          src={image}
          fill
          sizes="300px"
          className="object-cover"
          alt=""
        />
      </div>
      <div className="w-300 absolute text-center my-3 text-white text-xl">
        {title}
      </div>
      <div className="absolute flex flex-row justify-between gap-24 text-white mt-[260px]">
        <div className="text-sm">{category}</div>
        <div className="text-sm">{location}</div>
        <div className="text-sm">{date}</div>
      </div>
    </a>
  );
};
