import { ButtonLink } from "components/ButtonLink";

export const CallToActionButton = ({
  align = "left",
  buttonLabel,
  destination,
  tab,
}) => {
  const alignMap = {
    left: "text-align",
    center: "text-center",
    right: "text-right",
  };
  return (
    <div className={alignMap[align]}>
      <ButtonLink destination={destination} tab={tab} label={buttonLabel} />
    </div>
  );
};
