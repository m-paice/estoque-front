import { Button } from "../Button";
import { useState } from "react";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { Avatar } from "../Avatar";

export function ProductsNew() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  return (
    <div>
      <Button title="Novo Produto" onClick={() => setOpen(!open)} />

      <Modal
        title="Novo produto"
        isOpen={open}
        closeModal={() => setOpen(false)}
        size="medium"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 700,
            }}
          >
            <form
              onSubmit={() => {}}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                marginTop: 40,
              }}
            >
              <label
                htmlFor="file"
                style={{
                  width: 120,
                  height: 120,
                  margin: "0 auto",
                  cursor: "pointer",
                }}
              >
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files) {
                      setFile(e.target.files[0]);
                    }
                  }}
                />
                <Avatar
                  size="large"
                  url={file ? URL.createObjectURL(file) : undefined}
                />
              </label>

              <Input
                label="Nome"
                placeholder="Digite o nome do produto"
                name="name"
              />
              <Input
                label="Categoria"
                placeholder="Digite a categoria do produto"
                name="category"
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <Input
                  label="Preço"
                  placeholder="Digite o preço do produto"
                  name="price"
                />
                <Input
                  label="Quantidade em estoque"
                  placeholder="Digite a quantidade em estoque do produto"
                  name="amount"
                />
              </div>

              <Button title="Salvar" />
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
