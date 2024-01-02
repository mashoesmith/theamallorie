export const Column = ({
  children,
  width,
  textColor,
  backgroundColor,
  borderColor,
  borderWidth,
  classnames,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}) => {
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  const borderColorStyle = borderColor ? { borderColor } : {};
  const borderWidthStyle = borderWidth ? { borderWidth } : {};
  const paddingTopStyle = paddingTop ? { paddingTop } : {};
  const paddingBottomStyle = paddingBottom ? { paddingBottom } : {};
  const paddingLeftStyle = paddingLeft ? { paddingLeft } : {};
  const paddingRightStyle = paddingRight ? { paddingRight } : {};
  const widthStyle = width
    ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 };
  return (
    <div
      style={{
        ...widthStyle,
        ...textColorStyle,
        ...backgroundColorStyle,
        ...borderColorStyle,
        ...borderWidthStyle,
        ...paddingTopStyle,
        ...paddingBottomStyle,
        ...paddingLeftStyle,
        ...paddingRightStyle,
      }}
      className={`px-4 py-2 ${classnames}`}
    >
      {children}
    </div>
  );
};
