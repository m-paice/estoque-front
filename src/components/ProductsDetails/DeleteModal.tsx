import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { useRequestDestroy } from "../../hooks/useRequestDestroy";

export function DeleteModal() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { execute: execDelete } = useRequestDestroy({
    path: "/products",
    callbackSuccess: () => {
      navigate("/products");
    },
  });

  const handleCancel = () => {
    navigate(`/products/${id}`);
  };

  const handleSubmmit = () => {
    execDelete(id!);
  };

  return (
    <Modal
      title="Remover produto"
      isOpen={window.location.pathname.includes("/delete")}
      closeModal={handleCancel}
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
            Tem certeza que deseja remover <br /> o produto <b>Notebook</b>?
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
          <Button size="small" variant="outiline" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button size="small" onClick={handleSubmmit}>
            Remover
          </Button>
        </div>
      </div>
    </Modal>
  );
}
