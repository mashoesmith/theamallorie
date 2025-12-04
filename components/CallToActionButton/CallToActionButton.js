import { ButtonLink } from "components/ButtonLink";

export const CallToActionButton = ({
  buttonLabel,
  destination,
  target,
  align = "left",
}) => {
  const alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={alignMap[align] || "text-left"}>
      <ButtonLink
        label={buttonLabel || "Click here"}
        destination={destination}
        target={target}
      />
    </div>
  );
};
