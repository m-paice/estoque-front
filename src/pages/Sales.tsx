import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { Styles } from "../types/home";
import { Products } from "./Products";
import { useToggle } from "../hooks/useToggle";
import { useRequestFindMany } from "../hooks/useRequestFindMany";
import { Calendar } from "../components/Calendar";
import { Items } from "../components/Items";
import { Button } from "../components/Button";
import { SelectedDay } from "../components/SelectedDay";
import { Modal } from "../components/Modal";
import { SalesNew } from "../components/SalesNew";

export interface Order {
  id: string;
  total: number;
  status: string;
  createdAt: Date;
  products: Products[];
  userId: string | null;
}

export function Sales() {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(
    dayjs(new Date()).startOf("month")
  );
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));

  const { toggle, onChangeToggle } = useToggle();

  const handleCancel = () => {
    onChangeToggle();
    navigate("/sales");
  };

  const { execute: execFindOrders, response: orders } =
    useRequestFindMany<Order>({
      path: "/orders",
      defaultQuery: {
        where: {
          createdAt: {
            $gte: selectedDate.startOf("day").toISOString(),
            $lte: selectedDate.endOf("day").toISOString(),
          },
        },
      },
    });

  useEffect(() => {
    execFindOrders({
      where: {
        createdAt: {
          $gte: selectedDate.startOf("day").toISOString(),
          $lte: selectedDate.endOf("day").toISOString(),
        },
      },
    });
  }, [selectedDate]);

  return (
    <div style={styles.container}>
      <section style={styles.leftSection}>
        <SelectedDay selectedDate={selectedDate} />
        <Items orders={orders || []} />
        <Button size="large" onClick={handleCancel}>
          {"Registrar venda".toUpperCase()}
        </Button>
      </section>
      <section style={styles.rightSection}>
        <Calendar
          selectedDate={selectedDate}
          currentDate={currentDate}
          setSelectedDate={setSelectedDate}
          setCurrentDate={setCurrentDate}
        />
      </section>

      <Modal
        title="Registrando de venda"
        isOpen={toggle}
        closeModal={handleCancel}
      >
        <SalesNew />
      </Modal>
    </div>
  );
}

const styles: Styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "350px auto",
  },
  leftSection: {
    backgroundColor: "#e6e6e6",
    padding: "20px",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  rightSection: {
    padding: "15px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    backgroundColor: "#f4f4f4",
  },
};
