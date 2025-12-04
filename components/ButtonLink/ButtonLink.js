export const ButtonLink = ({ destination, label, target }) => {
  const href = typeof destination === "string" ? destination : destination?.url;

  return (
    <a
      href={href}
      target={target || undefined}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="btn button"
    >
      {label}
    </a>
  );
};
