import { Button } from "../Button";
import { useState } from "react";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { Avatar } from "../Avatar";

export function CategoriesNew() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button title="Nova categoria" onClick={() => setOpen(!open)} />

      <Modal
        title="Nova categoria"
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar size="large" />
              </div>
              <Input
                label="Nome"
                placeholder="Digite o nome da categoria"
                name="name"
              />

              <Button title="Salvar" />
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
