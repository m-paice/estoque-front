import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "../Button";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { Avatar } from "../Avatar";
import { useRequestCreate } from "../../hooks/useRequestCreate";
import { useRequestUpdate } from "../../hooks/useRequestUpdate";
import { useRequestFindOne } from "../../hooks/useRequestFindOne";
import { Products } from "../../pages/Products";
import { InputAsync } from "../InputAsync";
import { Categories } from "../../pages/Categories";

const initialState = {
  name: "",
  description: "",
  categoryId: "",
  category: {
    value: "",
    label: "",
  },
  price: 0,
  amount: 0,
};

export function ProductsForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [fields, setFields] = useState(initialState);

  const [file, setFile] = useState<File | null>(null);

  const { execute: execCreate, response: responseCreated } = useRequestCreate({
    path: "/products",
  });

  const { execute: execUpdate, response: responseUpdated } = useRequestUpdate({
    path: "/products",
    id: id!,
  });

  const { execute: execFindOne, response: responseFindOne } =
    useRequestFindOne<Products>({
      id: id!,
      path: "/products",
    });

  useEffect(() => {
    if (responseCreated || responseUpdated) {
      navigate("/products");
      setFields(initialState);
    }
  }, [responseCreated, responseUpdated]);

  useEffect(() => {
    if (id) execFindOne();
    else {
      setFields(initialState);
    }
  }, [id]);

  useEffect(() => {
    if (responseFindOne) {
      setFields({
        ...fields,
        name: responseFindOne.name,
        description: responseFindOne.description || "",
        price: Number(responseFindOne.price),
        amount: responseFindOne.amount,
        categoryId: responseFindOne.category?.id || "",
        category: {
          label: responseFindOne.category?.name || "",
          value: responseFindOne.category?.id || "",
        },
      });

      return;
    }

    setFields(initialState);
  }, [responseFindOne]);

  const handleCancel = () => {
    if (id) navigate(`/products/${id}`);
    else navigate("/products");
  };

  const handleNewProduct = () => {
    navigate("/products/new");
  };

  const isOpen =
    window.location.pathname.includes("/new") ||
    window.location.pathname.includes("/edit");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...fields,
      price: Number(fields.price),
    };

    if (id) execUpdate(payload);
    else execCreate(payload);
  };

  const handleSearchCategories = async (inputValue: string) => {
    const response = await fetch(
      `http://localhost:3334/api/v1/categories?q=${inputValue}`
    );
    const data = await response.json();

    return data.map((category: Categories) => ({
      label: category.name,
      value: category.id,
    }));
  };

  return (
    <div>
      <Button onClick={handleNewProduct}> Novo Produto </Button>

      <Modal
        title={id ? "Editar Produto" : "Novo Produto"}
        isOpen={isOpen}
        closeModal={handleCancel}
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
                value={fields.name}
                onChange={(e) => setFields({ ...fields, name: e.target.value })}
              />
              <Input
                label="Descrição"
                placeholder="Digite a descrição do produto"
                name="description"
                value={fields.description}
                onChange={(e) =>
                  setFields({ ...fields, description: e.target.value })
                }
              />
              <InputAsync
                label="Categorias"
                placeholder="Digite o nome da categoria"
                promiseOptions={handleSearchCategories}
                onChange={(value) =>
                  setFields({
                    ...fields,
                    categoryId: value.value,
                    category: value,
                  })
                }
                value={fields.category}
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
                  value={fields.price.toString()}
                  onChange={(e) =>
                    setFields({
                      ...fields,
                      price: Number(e.target.value),
                    })
                  }
                />
                <Input
                  label="Quantidade em estoque"
                  placeholder="Digite a quantidade em estoque do produto"
                  name="amount"
                  value={fields.amount.toString()}
                  onChange={(e) =>
                    setFields({ ...fields, amount: Number(e.target.value) })
                  }
                />
              </div>

              <Button> Salvar </Button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
