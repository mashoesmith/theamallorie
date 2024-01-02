export const Columns = ({
  isStackedOnMobile,
  children,
  textColor,
  backgroundColor,
  borderColor,
  borderWidth,
}) => {
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  const borderColorStyle = borderColor ? { borderColor } : {};
  const borderWidthStyle = borderWidth ? { borderWidth } : {};
  return (
    <div
      className="my-10"
      style={{
        ...textColorStyle,
        ...backgroundColorStyle,
        ...borderColorStyle,
        ...borderWidthStyle,
      }}
    >
      <div
        className={`max-w-5xl mx-auto flex ${
          isStackedOnMobile ? "block md:flex" : "flex"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
