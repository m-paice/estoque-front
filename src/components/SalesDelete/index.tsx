import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "../Modal";
import { useRequestDestroy } from "../../hooks/useRequestDestroy";
import { Button } from "../Button";

export function SalesDelete() {
  const navigate = useNavigate();
  const { saleId } = useParams<{ saleId: string }>();

  const { execute: execDelete } = useRequestDestroy({
    path: "/orders",
    callbackSuccess: () => {
      navigate("/sales");
    },
  });

  const handleCancel = () => {
    navigate(`/sales/${saleId}/details`);
  };

  const handleSubmit = () => {
    if (saleId) execDelete(saleId);
  };

  return (
    <Modal
      size="small"
      isOpen={window.location.pathname.includes(`/sales/${saleId}/delete`)}
      closeModal={() => navigate("/sales")}
      title="Deletar da venda"
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
            Tem certeza que deseja remover <br /> essa venda?
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
