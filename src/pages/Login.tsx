import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Login() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 500px",
        maxWidth: 1400,
        margin: "auto",
      }}
    >
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img width="200" src="/logo-meu-petrecho.png" alt="" />
          <img width="300" src="/meu-petrecho.png" alt="" />
        </div>
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: 20,
        }}
      >
        <div
          style={{
            maxWidth: 450,
          }}
        >
          <h4 style={{ fontSize: 30 }}>Bem-vindo ao Meu Petrecho</h4>
          <p
            style={{
              fontSize: 20,
              color: "#8e8e8e",
              marginBottom: 20,
            }}
          >
            Gerencie seus agendamentos de forma fácil e prática
          </p>
        </div>
        <div
          style={{
            width: "100%",
            maxWidth: 450,
          }}
        >
          <form
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <Input label="Usuário" placeholder="Digite seu usuário" />
            <Input label="Senha" placeholder="Digite sua senha" />

            <label
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
              htmlFor="remember"
            >
              <input type="checkbox" id="remember" name="remember" />
              Lembrar-me
            </label>
            <Button title="Entrar" onClick={() => navigate("sales")} />
          </form>
        </div>
      </section>
    </div>
  );
}
