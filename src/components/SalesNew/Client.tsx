import { Input } from "../Input";

export function Client() {
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
          <Input label="Nome" placeholder="Digite o nome do cliente" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
          >
            <Input
              label="Telefone"
              placeholder="Digite o telefone do cliente"
            />
            <Input label="CPF" placeholder="Digite o CPF do cliente" />
          </div>
        </div>
      </div>
      <div>
        <h4>Endereço</h4>
        <div>
          <Input label="CEP" placeholder="Digite o CEP " />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
          >
            <Input label="Rua" placeholder="Digite a rua" />
            <Input label="Número" placeholder="Digite o número" />
          </div>
          <Input label="Complemento" placeholder="Digite o complemento" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
          >
            <Input label="Bairro" placeholder="Digite o bairro" />
            <Input label="Cidade" placeholder="Digite a cidade" />
          </div>
          <Input label="Estado" placeholder="Digite o estado" />
        </div>
      </div>
    </div>
  );
}
