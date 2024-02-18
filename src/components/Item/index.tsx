import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

interface Props {
  text: string;
  color: string;
}

const actions = ["Finalizar", "Cancelar", "Restaurar", "Editar", "Deletar"];

export function Item({ text, color }: Props) {
  const [isHovered, setIsHovered] = useState("");

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <Menu as="div">
        <div>
          <Menu.Button
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            <div className="item" style={styles.item}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <b style={{ fontSize: 18 }}>8:00 AM</b>
                <span
                  style={{
                    backgroundColor: color,
                    ...styles.status,
                  }}
                >
                  {text}
                </span>
              </div>
              <p style={{ fontSize: 16 }}>Matheus Paice</p>
              <p style={{ fontSize: 16 }}>Corte degrade, barba</p>
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items>
            <div style={styles.containerOptions}>
              {actions.map((action) => (
                <Menu.Item key={action}>
                  <button
                    onClick={() => {
                      setIsHovered("");
                    }}
                    onMouseEnter={() => setIsHovered(action)}
                    onMouseLeave={() => setIsHovered("")}
                    style={{
                      ...styles.button,
                      color: isHovered === action ? "#e34954" : "#000",
                      backgroundColor:
                        isHovered === action
                          ? "rgba(250, 137, 107, 0.3)"
                          : "transparent",
                    }}
                  >
                    {action}
                  </button>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
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
    backgroundColor: "rgba(250, 137, 107, 0.3)",
    color: "#fa896b",
  },
  restored: {
    backgroundColor: "rgba(0, 123, 255, 0.3)",
    color: "#007bff",
  },
  default: {
    backgroundColor: "rgba(237, 59, 71, 0.3)",
    color: "#e34954",
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
