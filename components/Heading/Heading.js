import React from "react";
import { getFontSizeForHeading, getTextAlign } from "utils/fonts";

export const Heading = ({
  textAlign,
  textColor,
  content,
  level = 2,
  classNames,
}) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-5xl px-6 mx-auto mt-14 mb-5 md:mt-5 md:mb-5 ${classNames} ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
    style: { color: textColor },
  });
  return tag;
};
