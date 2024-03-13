import { CSSProperties } from "react";

import { colors } from "../../theme";
import { Item } from "../Item";
import { Order } from "../../pages/Sales";

interface Props {
  orders: Order[];
}

export function Items({ orders }: Props) {
  return (
    <div>
      <div>
        <span style={styles.title}>{orders.length} vendas</span>
      </div>
      <div style={styles.container}>
        {(orders || []).map((item) => {
          return <Item key={item.id} {...item} />;
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
