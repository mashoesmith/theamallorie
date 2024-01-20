import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({ title, destination, image }) => {
  return (
    <a
      className="border-[1px] flex flex-col align-center justify-center border-black p-1 hover:scale-105 duration-200 w-full h-full"
      href={destination}
    >
      <div className="flex w-full h-[200px] relative justify-center align-middle">
        <Image
          priority
          src={image}
          fill
          sizes="300px"
          className="object-cover"
          alt=""
        />
      </div>
      <div className="w-300 text-center my-3 text-lg uppercase tracking-wider">
        {title}
      </div>
    </a>
  );
};
