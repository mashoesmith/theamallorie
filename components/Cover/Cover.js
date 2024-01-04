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
      className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center"
    >
      <Image
        alt="cover"
        src={background}
        fill
        priority
        className="mix-blend-soft-light object-cover"
      />
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  );
};
