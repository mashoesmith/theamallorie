import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({
  textAlign = "left",
  content,
  textColor,
  dropCap,
  classNames,
}) => {
  if (dropCap) {
    return (
      <p
        className={`max-w-5xl mx-auto dropCap text-sm md:text-base leading-6 ${getTextAlign(
          textAlign
        )} ${classNames || ""}`}
        style={{ color: textColor }}
        dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
      />
    );
  } else {
    return (
      <p
        className={`max-w-5xl mx-auto text-sm md:text-base leading-6 ${getTextAlign(
          textAlign
        )} ${classNames || ""}`}
        style={{ color: textColor }}
        dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
      />
    );
  }
};
