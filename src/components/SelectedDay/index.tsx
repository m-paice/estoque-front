import dayjs from "dayjs";
import { colors } from "../../theme";

interface Props {
  selectedDate: dayjs.Dayjs;
}

const dayOfWeek: { [key: number]: string } = {
  0: "domingo",
  1: "segunda-feira",
  2: "terça-feira",
  3: "quarta-feira",
  4: "quinta-feira",
  5: "sexta-feira",
  6: "sábado",
};

export function SelectedDay({ selectedDate }: Props) {
  return (
    <div>
      <span
        style={{
          color: colors.primary,
          textTransform: "uppercase",
        }}
      >
        {selectedDate.format("DD/MM/YYYY") ===
        dayjs(new Date()).format("DD/MM/YYYY")
          ? "Hoje"
          : "Dia selecionado"}
      </span>
      <h4
        style={{
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        {selectedDate.format("D")} {selectedDate.format("MMMM")}, <br />
        {dayOfWeek[selectedDate.day()]}
      </h4>
    </div>
  );
}
