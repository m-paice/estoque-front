interface Props {
  size?: "tiny" | "small" | "medium" | "large";
  color?: string;
  url?: string;
}

export function Avatar({ size = "medium", color, url }: Props) {
  const sizes = {
    tiny: 20,
    small: 40,
    medium: 80,
    large: 120,
  };

  return (
    <div
      style={{
        width: sizes[size],
        height: sizes[size],
        backgroundColor: color || "#e6e6e6",
        borderRadius: sizes[size],
        backgroundImage: url ? `url(${url})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
