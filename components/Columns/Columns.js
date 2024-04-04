export const Columns = ({
  isStackedOnMobile,
  children,
  textColor,
  backgroundColor,
  borderColor,
  borderWidth,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  classnames,
}) => {
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  const borderColorStyle = borderColor ? { borderColor } : {};
  const borderWidthStyle = borderWidth ? { borderWidth } : {};
  const paddingTopStyle = paddingTop ? { paddingTop } : {};
  const paddingBottomStyle = paddingBottom ? { paddingBottom } : {};
  const paddingLeftStyle = paddingLeft ? { paddingLeft } : {};
  const paddingRightStyle = paddingRight ? { paddingRight } : {};
  return (
    <div
      className={`columns max-w-5xl mx-auto flex flex-col ${
        (classnames || "",
        isStackedOnMobile ? "block md:flex-row my-4 md:my-8" : "flex")
      }`}
      style={{
        ...textColorStyle,
        ...backgroundColorStyle,
        ...borderColorStyle,
        ...borderWidthStyle,
        ...paddingTopStyle,
        ...paddingBottomStyle,
        ...paddingLeftStyle,
        ...paddingRightStyle,
      }}
    >
      {children}
    </div>
  );
};
