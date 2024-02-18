import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button";
import { useLayoutContext } from "../../context/layout";
import { Bars4Icon } from "@heroicons/react/24/solid";

const paths = {
  "/schedules": {
    title: "Agendamentos",
    children: {
      "/new": {
        title: "Novo",
      },
      "/edit": {
        title: "Editar",
      },
    },
  },
  "/clients": {
    title: "Clientes",
    children: {
      "/new": {
        title: "Novo",
      },
      "/edit": {
        title: "Editar",
      },
    },
  },
  "/services": {
    title: "Serviços",
    children: {
      "/new": {
        title: "Novo",
      },
      "/edit": {
        title: "Editar",
      },
    },
  },
  "/campaigns": {
    title: "Campanhas",
    children: {
      "/new": {
        title: "Novo",
      },
      "/edit": {
        title: "Editar",
      },
    },
  },
};
export function Header() {
  const navigate = useNavigate();
  const { setHideSidebar, hideSidebar } = useLayoutContext();

  return (
    <header
      style={{
        gridArea: "header",
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        borderBottom: "1px solid #e6e6e6",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Bars4Icon
          width="30"
          onClick={() => setHideSidebar(!hideSidebar)}
          style={{ cursor: "pointer" }}
        />
        <div
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#8e8e8e",
            display: "flex",
            gap: 5,
          }}
        >
          Home -
          {Object.keys(paths).map((path) => {
            if (window.location.pathname.includes(path)) {
              return (
                <div key={path}>
                  <span>{paths[path].title}</span>
                  {Object.keys(paths[path].children).map((child) => {
                    if (window.location.pathname.includes(child)) {
                      return (
                        <span key={paths[path].children[child].title}>
                          {" - "}
                          {paths[path].children[child].title}
                        </span>
                      );
                    }
                  })}
                </div>
              );
            }
          })}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
        }}
      >
        <p
          style={{
            fontSize: 14,
            color: "#8e8e8e",
          }}
        >
          Ultimo acesso: 20/02/2024 14:00:25
        </p>
        <Menu as="div">
          <div>
            <Menu.Button
              style={{
                outline: "none",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#e6e6e6",
                  cursor: "pointer",
                }}
              ></div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  padding: 10,
                  backgroundColor: "white",
                  borderRadius: 5,
                  boxShadow: "0px 0px 5px #e6e6e6",
                  width: 150,
                  position: "absolute",
                  right: 20,
                  top: 50,
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#D9D9D9",
                      textAlign: "center",
                    }}
                  >
                    <strong>Roane Rocha</strong>
                  </p>
                </div>
                <Menu.Item>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 14,
                    }}
                  >
                    Perfil
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <Button
                    size="small"
                    title="Sair"
                    onClick={() => navigate("/")}
                  />
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
}
