import { Button } from "../Button";
import { Modal } from "../Modal";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function DeleteModal({ open, setOpen }: Props) {
  return (
    <Modal
      title="Remover categoria"
      isOpen={open}
      closeModal={() => setOpen(false)}
      size="small"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <p style={{ textAlign: "center", fontSize: 18 }}>
            Tem certeza que deseja remover <br /> a categoria <b>Tecnologia</b>?
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 50,
          }}
        >
          <Button
            size="small"
            variant="outiline"
            onClick={() => setOpen(false)}
          >
            {" "}
            Cancelar{" "}
          </Button>
          <Button size="small" onClick={() => setOpen(false)}>
            {" "}
            Remover{" "}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
