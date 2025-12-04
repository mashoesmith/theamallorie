import Link from "next/link";

function SmartLink({ destination, label, target }) {
  const isInternal = destination?.startsWith("/");

  if (isInternal) {
    return (
      <Link href={destination} className="p-5 block">
        {label}
      </Link>
    );
  }

  return (
    <a
      href={destination}
      target={target || "_blank"}
      rel="noopener noreferrer"
      className="p-5 block"
    >
      {label}
    </a>
  );
}
