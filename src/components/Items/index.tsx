import { CSSProperties } from "react";

import { colors } from "../../theme";
import { Item } from "../Item";

const status: { [key: number]: { color: string; text: string } } = {
  1: { color: "#13deb9", text: "finalizado" },
  2: { color: "#ffae1f", text: "pendente" },
  3: { color: "#fa896b", text: "cancelado" },
};

export function Items() {
  return (
    <div>
      <div>
        <span style={styles.title}>8 vendas</span>
      </div>
      <div style={styles.container}>
        {Array.from({ length: 8 }).map((_, i) => {
          const { color, text } = status[Math.floor(Math.random() * 3) + 1];

          return <Item key={i} text={text} color={color} />;
        })}
      </div>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    overflowY: "auto",
    height: "300px",
  },
  title: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 24,
  },
};
