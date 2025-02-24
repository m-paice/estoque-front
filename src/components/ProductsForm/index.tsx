import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PlusCircleIcon, ArrowUturnRightIcon } from "@heroicons/react/20/solid";

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
import { VariantItem } from "./VariantItem";

interface InitialState {
  name: string;
  description: string;
  categories: {
    label: string;
    value: string;
  }[];
  price: number;
  amount: number;
  color: string;
  size: string;
  variants: {
    price: number;
    amount: number;
    color: string;
    size: string;
  }[];
}

const initialState: InitialState = {
  name: "",
  description: "",
  categories: [],
  price: 0,
  amount: 0,
  color: "",
  size: "",
  variants: [],
};

export function ProductsForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [fields, setFields] = useState(initialState);
  const [isEditing, setIsEditing] = useState({
    status: false,
    index: 0,
  });
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
        price: 0,
        amount: 0,
        color: "",
        size: "",
        categories: responseFindOne.categories.map((category) => ({
          label: category.name,
          value: category.id,
        })),
        variants: responseFindOne.variants.map((variant) => ({
          price: variant.price,
          amount: variant.amount,
          color: variant.color,
          size: variant.size,
        })),
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
      categories: fields.categories.map((category) => category.value),
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
                value={fields.categories}
                onChange={(value) => {
                  setFields({
                    ...fields,
                    categories: value,
                  });
                }}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 60px 100px 50px",
                  alignItems: "flex-end",
                  gap: 16,
                }}
              >
                <Input
                  label="Preço"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="Digite o preço do produto"
                  name="price"
                  value={fields.price.toString()}
                  onChange={(e) =>
                    setFields({ ...fields, price: Number(e.target.value) })
                  }
                />
                <Input
                  label="Quantidade"
                  type="number"
                  placeholder="Digite a quantidade em estoque do produto"
                  name="amount"
                  value={fields.amount.toString()}
                  onChange={(e) =>
                    setFields({ ...fields, amount: Number(e.target.value) })
                  }
                />
                <Input
                  type="color"
                  label="Cor"
                  name="color"
                  value={fields.color}
                  onChange={(e) =>
                    setFields({
                      ...fields,
                      color: e.target.value,
                    })
                  }
                />
                <Input
                  label="Tamanho"
                  placeholder="Digite o tamanho do produto"
                  name="size"
                  value={fields.size}
                  onChange={(e) =>
                    setFields({
                      ...fields,
                      size: e.target.value,
                    })
                  }
                />
                {isEditing.status ? (
                  <ArrowUturnRightIcon
                    style={{
                      cursor: "pointer",
                    }}
                    color="#7E9EF0"
                    onClick={() => {
                      if (isEditing.status) {
                        const newVariants = fields.variants.map(
                          (variant, index) =>
                            index === isEditing.index
                              ? {
                                  price: fields.price,
                                  amount: fields.amount,
                                  color: fields.color,
                                  size: fields.size,
                                }
                              : variant
                        );

                        setFields({
                          ...fields,
                          variants: newVariants,
                        });

                        setIsEditing({
                          status: false,
                          index: 0,
                        });

                        return;
                      }
                      setFields({
                        ...fields,
                        variants: [
                          ...fields.variants,
                          {
                            price: fields.price,
                            amount: fields.amount,
                            color: fields.color,
                            size: fields.size,
                          },
                        ],
                      });
                    }}
                    width={30}
                  />
                ) : (
                  <PlusCircleIcon
                    style={{
                      cursor: "pointer",
                    }}
                    color="#7E9EF0"
                    onClick={() => {
                      setFields({
                        ...fields,
                        variants: [
                          ...fields.variants,
                          {
                            price: fields.price,
                            amount: fields.amount,
                            color: fields.color,
                            size: fields.size,
                          },
                        ],
                      });
                    }}
                    width={30}
                  />
                )}
              </div>

              {fields.variants.length > 0 && (
                <div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 60px 100px 20px 20px",
                      gap: 16,
                    }}
                  >
                    <p>Preço</p>
                    <p>Quantidade</p>
                    <p>Cor</p>
                    <p>Tamanho</p>
                    <p></p>
                    <p></p>
                  </div>

                  <div>
                    {fields.variants.map((variant, index) => (
                      <VariantItem
                        key={index}
                        index={index}
                        variant={variant}
                        editItem={(index) => {
                          const item = fields.variants[index];
                          setFields({
                            ...fields,
                            price: item.price,
                            amount: item.amount,
                            color: item.color,
                            size: item.size,
                          });
                          setIsEditing({
                            status: true,
                            index,
                          });
                        }}
                        removeItem={(index) => {
                          const newVariants = fields.variants.filter(
                            (_, i) => i !== index
                          );

                          setFields({
                            ...fields,
                            variants: newVariants,
                          });
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <Button type="submit"> Salvar </Button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
