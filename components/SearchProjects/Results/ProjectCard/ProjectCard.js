import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({ title, destination, image }) => {
  return (
    <Link
      className="border-[1px] flex flex-col align-center justify-center border-black p-1 hover:scale-105 duration-200 w-full h-full"
      href={destination}
    >
      <div className="flex w-full justify-center align-middle">
        <Image
          src={image}
          height="500"
          width="400"
          className="object-cover w-full h-[600px]"
          alt=""
        />
      </div>
      <div className="w-300 text-center my-3 text-lg uppercase tracking-wider">
        {title}
      </div>
    </Link>
  );
};
