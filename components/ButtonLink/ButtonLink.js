export const ButtonLink = ({ destination, label, target }) => {
  // Force href to a string, fallback to #
  const safeHref =
    typeof destination === "string"
      ? destination
      : destination?.url
      ? destination.url
      : "#";

  const safeTarget =
    target === "_blank" || target === "_self" ? target : "_self";

  return (
    <a
      href={safeHref}
      target={safeTarget}
      rel={safeTarget === "_blank" ? "noopener noreferrer" : undefined}
      className="btn button"
    >
      {label || "Click here"}
    </a>
  );
};
