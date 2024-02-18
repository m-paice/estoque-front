import { CreditCardIcon, CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { Input } from "../Input";
import { useState } from "react";

interface Props {
  products: {
    id: string;
    name: string;
    price: number;
    amount: number;
  }[];
}

const payments = [
  { name: "Dinheiro", icon: CurrencyDollarIcon },
  { name: "PIX", icon: CurrencyDollarIcon },
  { name: "Cartão de crédito", icon: CreditCardIcon },
  { name: "Cartão de débito", icon: CreditCardIcon },
  { name: "A prazo", icon: CurrencyDollarIcon },
];

export function Payment({ products }: Props) {
  const [paymentSelected, setPaymentSelected] = useState("");

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <div>
        <h4>Produtos</h4>
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              style={{
                display: "grid",
                gridTemplateColumns: "30px auto 100px 80px ",
                alignItems: "center",
                marginBottom: 2,
                fontSize: 14,
              }}
            >
              <p>{product.amount}x</p>
              <p>{product.name}</p>
              <p>
                {product.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </li>
          ))}
        </ul>

        <h4>Dados do cliente</h4>
        <p style={{ fontSize: 14 }}>João da Silva - (11) 99999-9999</p>
        <p style={{ fontSize: 14 }}>CPF: 123.456.789-00</p>

        <h4>Endereço</h4>
        <p style={{ fontSize: 14 }}>Rua das flores, 123, Casa</p>
        <p style={{ fontSize: 14 }}>Jardim das flores - SP</p>
      </div>

      <div>
        <h4>Forma de pagamento</h4>
        <ul>
          {payments.map((payment) => (
            <li
              key={payment.name}
              style={{
                display: "grid",
                gridTemplateColumns: "25px auto",
                alignItems: "center",
                marginBottom: 5,
                cursor: "pointer",
                color: paymentSelected === payment.name ? "#e34954" : "black",
              }}
              onClick={() => setPaymentSelected(payment.name)}
            >
              <payment.icon width={20} />
              <p>{payment.name}</p>
            </li>
          ))}
        </ul>

        <div
          style={{
            margin: "20px 0",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          <Input label="Desconto" placeholder="R$ 0,00" size="small" />
          <Input label="Acréscimo" placeholder="R$ 0,00" size="small" />
        </div>

        <h2
          style={{
            textAlign: "right",
          }}
        >
          TOTAL R$ 200,00
        </h2>
      </div>
    </div>
  );
}
