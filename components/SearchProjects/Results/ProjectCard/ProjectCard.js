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
      className="flex flex-row items-center justify-end w-full h-[300px] bg-black bg-opacity-20"
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
      <div className="w-300 absolute text-center my-3 text-white text-xl mr-10">
        {title}
      </div>
      <div className="text-lg">{category}</div>
      <div className="text-lg">{location}</div>
      <div className="text-lg">{date}</div>
    </a>
  );
};
