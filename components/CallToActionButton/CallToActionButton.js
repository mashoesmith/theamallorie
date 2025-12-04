import { ButtonLink } from "components/ButtonLink";

export const CallToActionButton = ({
  align = "left",
  buttonLabel,
  destination,
  target,
}) => {
  const alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={alignMap[align]}>
      <ButtonLink
        destination={destination}
        target={target}
        label={buttonLabel}
      />
    </div>
  );
};
