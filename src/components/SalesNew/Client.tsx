import { useEffect } from "react";
import { useSaleContext } from "../../context/sale";
import { Input } from "../Input";

export function Client() {
  const { handleSetClient, client } = useSaleContext();

  useEffect(() => {
    if (client.address.zipcode.length === 8) {
      fetch(`https://viacep.com.br/ws/${client.address.zipcode}/json/`)
        .then((response) => response.json())
        .then((data) => {
          handleSetClient({
            ...client,
            address: {
              street: data.logradouro,
              neighborhood: data.bairro,
              city: data.localidade,
              state: data.uf,
              zipcode: client.address.zipcode,
              number: "",
              complement: "",
            },
          });
        });
    }
  }, [client.address.zipcode]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 50,
      }}
    >
      <div>
        <h4>Dados pesoais</h4>
        <div>
          <Input
            name="name"
            label="Nome"
            placeholder="Digite o nome do cliente"
            onChange={(e) =>
              handleSetClient({ ...client, name: e.target.value })
            }
            value={client.name}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
          >
            <Input
              name="cellPhone"
              label="Telefone"
              placeholder="Digite o telefone do cliente"
              onChange={(e) =>
                handleSetClient({
                  ...client,
                  cellPhone: e.target.value
                    .replace(/\D/g, "")
                    .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"),
                })
              }
              value={client.cellPhone}
            />
            <Input
              name="document"
              label="CPF"
              placeholder="Digite o CPF do cliente"
              onChange={(e) =>
                handleSetClient({
                  ...client,
                  document: e.target.value
                    .replace(/\D/g, "")
                    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
                })
              }
              value={client.document}
            />
          </div>
        </div>
      </div>
      <div>
        <h4>Endereço</h4>
        <div>
          <Input
            label="CEP"
            placeholder="Digite o CEP"
            name="zipcode"
            onChange={(e) =>
              handleSetClient({
                ...client,
                address: { ...client.address, zipcode: e.target.value },
              })
            }
            value={client.address.zipcode}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
          >
            <Input
              label="Rua"
              placeholder="Digite a rua"
              name="street"
              value={client.address.street}
              onChange={(e) =>
                handleSetClient({
                  ...client,
                  address: { ...client.address, street: e.target.value },
                })
              }
            />
            <Input
              label="Número"
              placeholder="Digite o número"
              name="number"
              value={client.address.number}
              onChange={(e) =>
                handleSetClient({
                  ...client,
                  address: { ...client.address, number: e.target.value },
                })
              }
            />
          </div>
          <Input
            label="Complemento"
            placeholder="Digite o complemento"
            name="complement"
            value={client.address.complement}
            onChange={(e) =>
              handleSetClient({
                ...client,
                address: { ...client.address, complement: e.target.value },
              })
            }
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 80px",
              gap: 20,
            }}
          >
            <Input
              label="Bairro"
              placeholder="Digite o bairro"
              name="neighborhood"
              value={client.address.neighborhood}
              onChange={(e) =>
                handleSetClient({
                  ...client,
                  address: { ...client.address, neighborhood: e.target.value },
                })
              }
            />
            <Input
              label="Cidade"
              placeholder="Digite a cidade"
              name="city"
              value={client.address.city}
              onChange={(e) =>
                handleSetClient({
                  ...client,
                  address: { ...client.address, city: e.target.value },
                })
              }
            />
            <Input
              label="Estado"
              placeholder="UF"
              name="state"
              value={client.address.state}
              onChange={(e) =>
                handleSetClient({
                  ...client,
                  address: { ...client.address, state: e.target.value },
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
