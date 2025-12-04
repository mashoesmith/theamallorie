export const ButtonLink = ({ destination, label, target }) => {
  return (
    <a
      href={destination}
      target={target || undefined}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="btn button"
    >
      {label}
    </a>
  );
};
