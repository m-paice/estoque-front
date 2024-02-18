import { useState } from "react";
import dayjs from "dayjs";

import { Styles } from "../types/home";
import { useToggle } from "../hooks/useToggle";
import { Calendar } from "../components/Calendar";
import { Items } from "../components/Items";
import { Button } from "../components/Button";
import { SelectedDay } from "../components/SelectedDay";
import { Modal } from "../components/Modal";
import { SalesNew } from "../components/SalesNew";

export function Sales() {
  const [currentDate, setCurrentDate] = useState(
    dayjs(new Date()).startOf("month")
  );
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));

  const { isOpen, toggle } = useToggle();

  return (
    <div style={styles.container}>
      <section style={styles.leftSection}>
        <SelectedDay selectedDate={selectedDate} />
        <Items />
        <Button title="Registrar venda" size="large" onClick={toggle} />
      </section>
      <section style={styles.rightSection}>
        <Calendar
          selectedDate={selectedDate}
          currentDate={currentDate}
          setSelectedDate={setSelectedDate}
          setCurrentDate={setCurrentDate}
        />
      </section>

      <Modal title="Registrando de venda" isOpen={isOpen} closeModal={toggle}>
        <SalesNew onClose={toggle} />
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
