import { Button } from "../Button";
import { useEffect, useState } from "react";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { Avatar } from "../Avatar";
import { useRequestCreate } from "../../hooks/useRequestCreate";
import { useNavigate, useParams } from "react-router-dom";
import { useRequestFindOne } from "../../hooks/useRequestFindOne";
import { useRequestUpdate } from "../../hooks/useRequestUpdate";

const initialState = {
  name: "",
};

export function CategoriesForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [fields, setFields] = useState(initialState);

  const { execute, response } = useRequestCreate({
    path: "/categories",
  });
  const { execute: execUpdate, response: responseUpdate } = useRequestUpdate({
    path: "/categories",
    id: id!,
  });
  const { execute: execFindOne, response: responseFindOnde } =
    useRequestFindOne<{ name: string }>({
      id: id!,
      path: "/categories",
    });

  useEffect(() => {
    if (id) execFindOne();
    else {
      setFields(initialState);
    }
  }, [id]);

  useEffect(() => {
    if (responseFindOnde) {
      setFields({
        name: responseFindOnde.name,
      });
    }
  }, [responseFindOnde]);

  useEffect(() => {
    if (response || responseUpdate) {
      navigate("/categories");
      setFields(initialState);
    }
  }, [response, responseUpdate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) execUpdate(fields);
    else execute(fields);
  };

  const handleClickNew = () => {
    navigate("/categories/new");
  };

  const isEditing = id;

  return (
    <div>
      <Button onClick={handleClickNew}>Nova categoria</Button>

      <Modal
        title={isEditing ? "Editar categoria" : "Nova categoria"}
        isOpen={
          window.location.pathname.includes("/new") ||
          window.location.pathname.includes("/edit")
        }
        closeModal={() => {
          if (isEditing) navigate(`/categories/${id}`);
          else navigate("/categories");
        }}
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
              onSubmit={handleSubmit}
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
                value={fields.name}
                onChange={(e) => setFields({ ...fields, name: e.target.value })}
              />

              <Button> Salvar </Button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
