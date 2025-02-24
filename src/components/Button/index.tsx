import { useState } from "react";

interface Props {
  children?: React.ReactNode;
  variant?: "outiline" | "filled";
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  color?: "info" | "success" | "danger" | "warning";
  icon?: boolean;
  type?: "button" | "submit" | "reset";
}

const sizes = {
  small: "14px",
  medium: "16px",
  large: "20px",
};
const colors = {
  info: { background: "#BFCCED", text: "#FFFFFF", hover: "#7E9EF0" },
  success: { background: "#4CAF50", text: "#FFFFFF", hover: "#7CB342" },
  danger: { background: "#E57373", text: "#FFFFFF", hover: "#EF9A9A" },
  warning: { background: "#FFC107", text: "#FFFFFF", hover: "#FFD54F" },
};

export function Button({
  children,
  variant = "filled",
  onClick,
  size = "medium",
  color = "info",
  icon = false,
  type = "button",
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "10px",
        transition: "0.3s",
        // backgroundColor: isHovered
        //   ? "#BFCCED"
        //   : variant === "filled"
        //   ? colors.primary
        //   : "transparent",
        // border: variant === "filled" ? "none" : `1px solid ${colors.primary}`,
        // color: isHovered
        //   ? colors.primary
        //   : variant === "filled"
        //   ? colors.white
        //   : colors.primary,
        backgroundColor: isHovered
          ? colors[color].hover
          : variant === "filled"
          ? colors[color].background
          : "transparent",
        border:
          variant === "filled"
            ? "none"
            : `1px solid ${colors[color].background}`,
        color: isHovered
          ? colors[color].text
          : variant === "filled"
          ? colors[color].text
          : colors[color].background,
        borderRadius: "7px",
        cursor: "pointer",
        width: "100%",
        minWidth: icon ? "auto" : "100px",
        fontSize: sizes[size] || sizes.medium,
        fontWeight: "bold",
        outline: "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}
