import { useState } from "react";

interface Props {
  text: string;
  color: string;
}

export function Item({ text, color }: Props) {
  const [isHovered, setIsHovered] = useState("");

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <div
        className="item"
        onMouseEnter={() => setIsHovered(text)}
        onMouseLeave={() => setIsHovered("")}
        style={{
          ...styles.item,
          transition: "0.3s",
          color: isHovered === text ? "#7E9EF0" : "black",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <b style={{ fontSize: 18 }}>8:00 AM</b>
        </div>
        <p style={{ fontSize: 16 }}>Matheus Paice</p>
        <p style={{ fontSize: 16 }}>Notebook, Teclado, Mouse</p>
      </div>
    </div>
  );
}

const styles = {
  item: {
    width: "100%",
    marginBottom: "10px",
    borderBottom: "1px solid #000",
    cursor: "pointer",
    marginRight: 10,
    fonttSize: 18,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  status: {
    color: "#fff",
    padding: "3px",
    borderRadius: "3px",
    marginRight: 5,
  },
  containerOptions: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: "0px 0px 5px #e6e6e6",
    width: 150,
    position: "absolute",
    right: 5,
    top: 30,
    zIndex: 1,
  },

  confirmed: {
    backgroundColor: "rgba(19, 222, 185, 0.3)",
    color: "#13deb9",
  },
  canceled: {
    backgroundColor: "#7E9EF0",
    color: "#fa896b",
  },
  restored: {
    backgroundColor: "rgba(0, 123, 255, 0.3)",
    color: "#007bff",
  },
  default: {
    backgroundColor: "rgba(237, 59, 71, 0.3)",
    color: "#7E9EF0",
  },

  button: {
    padding: "5px 10px",
    color: "#000",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    borderRadius: 3,
    fontSize: 14,
    textAlign: "left",
    transition: "0.3s",
  },
};
