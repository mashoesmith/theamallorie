export const Separator = ({ marginTop, marginBottom }) => {
  const marginTopStyle = marginTop ? { marginTop } : {};
  const marginBottomStyle = marginBottom ? { marginBottom } : {};
  return (
    <div
      style={{
        ...marginTopStyle,
        ...marginBottomStyle,
      }}
      className="w-20 h-[2px] bg-black mx-auto"
    ></div>
  );
};
