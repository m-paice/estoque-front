import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useRequestFindOne } from "../../hooks/useRequestFindOne";
import { Modal } from "../Modal";
import { Order } from "../../pages/Sales";
import { Button } from "../Button";

const Paragraph = ({ title, prefix }: { title: string; prefix?: string }) => (
  <p
    style={{
      margin: 0,
      padding: 0,
      // color: "#5a6a85",
    }}
  >
    {prefix && <span style={{ fontWeight: "bold" }}>{prefix} </span>}
    {title}
  </p>
);

const InfoValue = ({
  title,
  value,
  sub = false,
}: {
  title: string;
  value: string;
  sub?: boolean;
}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
    }}
  >
    <p
      style={{
        margin: 0,
        padding: 0,
        fontSize: sub ? 16 : 22,
      }}
    >
      {title}
    </p>
    <p
      style={{
        margin: 0,
        padding: 0,
        fontSize: sub ? 16 : 22,
      }}
    >
      {value}
    </p>
  </div>
);

export function SalesDetails() {
  const navigate = useNavigate();
  const { saleId } = useParams<{ saleId: string }>();

  const { execute: execFindOne, response: order } = useRequestFindOne<Order>({
    path: "/orders",
    id: saleId!,
  });

  useEffect(() => {
    if (saleId) execFindOne();
  }, [saleId]);

  return (
    <Modal
      isOpen={window.location.pathname.includes(`/sales/${saleId}/details`)}
      closeModal={() => navigate("/sales")}
      title="Detalhes da venda"
    >
      <div
        style={{
          height: 500,
          overflow: "auto",
          paddingRight: 10,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 15,
          }}
        >
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 10,
              padding: 15,
            }}
          >
            <h4>{"Dados do cliente".toUpperCase()}</h4>

            <div>
              <Paragraph title={order?.user?.name || ""} />

              <Paragraph title={order?.user?.cellPhone || ""} />
            </div>
          </div>
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 10,
              padding: 15,
            }}
          >
            <h4>{"Endereço".toUpperCase()}</h4>

            <div>
              <Paragraph title={order?.user?.addresses[0].zipcode || ""} />
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <Paragraph title={order?.user?.addresses[0].street || ""} />
                <Paragraph title={order?.user?.addresses[0].number || ""} />
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <Paragraph
                  title={order?.user?.addresses[0].neighborhood || ""}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <Paragraph title={order?.user?.addresses[0].city || ""} />
                <Paragraph title={order?.user?.addresses[0].state || ""} />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 15,
          }}
        >
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 10,

              padding: 15,
            }}
          >
            <h4>{"Forma de pagamento".toUpperCase()}</h4>

            <label htmlFor="credit">{order?.paymentMethod}</label>
          </div>
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 10,
              padding: 15,
            }}
          >
            <h4>{"status".toUpperCase()}</h4>

            <label htmlFor="credit">{order?.status}</label>
          </div>
          <div></div>
        </div>

        <div>
          <h4>{"Produtos".toUpperCase()}</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr 120px 120px 120px",
            }}
          >
            <p>ID</p>
            <p>Nome</p>
            <p style={{ textAlign: "right" }}>Quantidade</p>
            <p style={{ textAlign: "right" }}>Preço Unidade</p>
            <p style={{ textAlign: "right" }}>Total</p>
          </div>
          <div>
            {order?.products.map((product) => (
              <div
                key={product.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr 120px 120px 120px",
                  borderBottom: "1px solid #e5e7eb",
                  paddingTop: 10,
                }}
              >
                <p>#{product.id.slice(0, 5)}</p>
                <p>{product.name}</p>
                <p style={{ textAlign: "right" }}>
                  {product.OrderProducts.amount}
                </p>
                <p style={{ textAlign: "right" }}>
                  {product.OrderProducts.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p style={{ textAlign: "right" }}>
                  {(
                    product.OrderProducts.price * product.OrderProducts.amount
                  ).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <InfoValue
            sub
            title="Taxa de entrega"
            value={
              (20).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              }) || ""
            }
          />
          <InfoValue
            title="Total"
            value={
              order?.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              }) || ""
            }
          />
        </div>

        <Button
          color="danger"
          variant="outiline"
          onClick={() => navigate(`/sales/${saleId}/delete`)}
        >
          {"cancelar venda".toUpperCase()}
        </Button>
      </div>
    </Modal>
  );
}
