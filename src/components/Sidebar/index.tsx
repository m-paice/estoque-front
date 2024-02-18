import { useNavigate } from "react-router-dom";

import { CalendarIcon, UsersIcon, WrenchIcon } from "@heroicons/react/20/solid";

import { useLayoutContext } from "../../context/layout";
import { useState } from "react";

const routes = [
  {
    path: "/sales",
    label: "Vendas",
    icon: CalendarIcon,
  },
  {
    path: "/products",
    label: "Produtos",
    icon: UsersIcon,
  },
  {
    path: "/categories",
    label: "Categorias",
    icon: WrenchIcon,
  },
  // {
  //   path: "/reports",
  //   label: "Relatórios",
  //   icon: WrenchIcon,
  // },
];

export function Sidebar() {
  const navigate = useNavigate();
  const { hideSidebar } = useLayoutContext();

  const [isHovered, setIsHovered] = useState("");

  return (
    <div
      style={{
        gridArea: "sidebar",
        backgroundColor: "#fff",
        borderRight: "1px solid #e6e6e6",
        height: "100vh",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px",
        transition: "0.3s",
        width: hideSidebar ? 80 : 250,
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: hideSidebar ? 0 : 20,
          }}
        >
          <img width="40" src="/logo-meu-petrecho.png" alt="" />
          <h4
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {hideSidebar ? null : "Meu Petrecho"}
          </h4>
        </div>

        <ul
          style={{
            padding: 10,
          }}
        >
          {routes.map((route) => (
            <li
              key={route.path}
              onClick={() => navigate(route.path)}
              onMouseEnter={() => setIsHovered(route.path)}
              onMouseLeave={() => setIsHovered("")}
              style={{
                padding: "10px",
                cursor: "pointer",
                display: "flex",
                gap: 10,
                alignItems: "center",
                margin: "15px 0",
                borderRadius: 5,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                backgroundColor:
                  isHovered === route.path &&
                  !location.pathname.includes(route.path)
                    ? "rgba(250, 137, 107, 0.3)"
                    : location.pathname.includes(route.path)
                    ? "#e34954"
                    : "white",
                color: location.pathname.includes(route.path)
                  ? "white"
                  : "black",
                transition: "0.3s",
              }}
            >
              {route.icon ? (
                <route.icon
                  width={20}
                  color={
                    isHovered === route.path &&
                    !location.pathname.includes(route.path)
                      ? "#e34954"
                      : ""
                  }
                />
              ) : null}
              {hideSidebar ? null : <p>{route.label}</p>}
            </li>
          ))}
        </ul>
      </div>

      <p
        style={{
          textAlign: "center",
          color: "#000",
          fontSize: 14,
        }}
      >
        versão 1.0.0
      </p>
    </div>
  );
}
