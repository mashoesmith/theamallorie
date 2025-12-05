import Link from "next/link";

export const ButtonLink = ({ destination, label, tab }) => {
  return (
    <a href={destination} target={tab} className="btn button">
      {label}
    </a>
  );
};
