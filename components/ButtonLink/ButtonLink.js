import Link from "next/link";

export const ButtonLink = ({ destination, label, target }) => {
  return (
    <a href={destination} target={target || null} className="btn button">
      {label}
    </a>
  );
};
