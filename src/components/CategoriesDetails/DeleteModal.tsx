import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { useRequestDestroy } from "../../hooks/useRequestDestroy";

export function DeleteModal() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { execute } = useRequestDestroy({
    path: "/categories",
    callbackSuccess: () => {
      navigate("/categories");
    },
  });

  const handleSubmit = () => {
    execute(id!);
  };
  const handleCancel = () => {
    navigate(`/categories/${id}`);
  };

  return (
    <Modal
      title="Remover categoria"
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
          <Button size="small" variant="outiline" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button size="small" onClick={handleSubmit}>
            Remover
          </Button>
        </div>
      </div>
    </Modal>
  );
}
