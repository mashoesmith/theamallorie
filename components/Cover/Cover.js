import Image from "next/image";

export const Cover = ({ children, background, borderColor, borderWidth }) => {
  const borderColorStyle = borderColor ? { borderColor } : {};
  const borderWidthStyle = borderWidth ? { borderWidth } : {};
  return (
    <div
      style={{
        ...borderColorStyle,
        ...borderWidthStyle,
      }}
      className="h-4/5 text-white bg-black bg-opacity-30 relative min-h-[600px] flex justify-center items-center"
    >
      <Image
        alt="cover"
        src={background}
        fill
        priority
        className="mix-blend-soft-light object-cover opacity-100"
      />
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  );
};
