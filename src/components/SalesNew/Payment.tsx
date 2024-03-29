import { CurrencyDollarIcon } from "@heroicons/react/20/solid";

import { Button } from "../Button";
import { useSaleContext } from "../../context/sale";

interface Props {
  setStep: (step: number) => void;
}

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

export function Payment({ setStep }: Props) {
  const { products, client, handleSubmitSale } = useSaleContext();

  const handleSubimit = () => {
    handleSubmitSale();
    setStep(1);
  };

  return (
    <div
      style={{
        height: 420,
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <h4>{"Dados do cliente".toUpperCase()}</h4>
            <span
              style={{
                color: "#5a6a85",
                cursor: "pointer",
              }}
            >
              editar
            </span>
          </div>
          <div>
            <Paragraph title={client.name} />
            <Paragraph title={client.cellPhone} />
            <Paragraph title={client.document} prefix="CPF:" />
          </div>
        </div>
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: 10,
            padding: 15,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <h4>{"Endereço".toUpperCase()}</h4>
            <span
              style={{
                color: "#5a6a85",
                cursor: "pointer",
              }}
            >
              editar
            </span>
          </div>
          <div>
            <Paragraph title={client.address.zipcode} />
            <div
              style={{
                display: "flex",
                gap: 10,
              }}
            >
              <Paragraph title={client.address.street} />
              <Paragraph title={client.address.number} />
            </div>
            <div
              style={{
                display: "flex",
                gap: 10,
              }}
            >
              <Paragraph title={client.address.neighborhood} />
            </div>
            <div
              style={{
                display: "flex",
                gap: 10,
              }}
            >
              <Paragraph title={client.address.city} />
              <Paragraph title={client.address.state} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 10,
          padding: 15,
        }}
      >
        <h4>{"Forma de pagamento".toUpperCase()}</h4>
        <input type="radio" name="payment" id="credit" />
        <label htmlFor="credit">Cartão de crédito</label>
        <br />
        <input type="radio" name="payment" id="debit" />
        <label htmlFor="debit">Cartão de débito</label>
        <br />
        <input type="radio" name="payment" id="money" />
        <label htmlFor="money">Dinheiro</label>
        <br />
        <input type="radio" name="payment" id="pix" />
        <label htmlFor="pix">Pix</label>
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
          {products.map((product) => (
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
              <p style={{ textAlign: "right" }}>{product.amount}</p>
              <p style={{ textAlign: "right" }}>
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <p style={{ textAlign: "right" }}>
                {(product.price * product.amount).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 10,
          }}
        >
          <p
            style={{
              fontSize: 16,
            }}
          >
            Taxa de entrega
          </p>
          <p style={{ textAlign: "right", fontSize: 16 }}>
            {(20).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 10,
          }}
        >
          <p
            style={{
              fontSize: 20,
            }}
          >
            Total
          </p>
          <p style={{ textAlign: "right", fontSize: 20 }}>
            {products
              .reduce((acc, product) => acc + product.price * product.amount, 0)
              .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
          </p>
        </div>
      </div>

      <Button onClick={handleSubimit}>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <CurrencyDollarIcon width={20} />
          Finalizar
        </div>
      </Button>
    </div>
  );
}
