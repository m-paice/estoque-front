import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { useLayoutContext } from "../context/layout";

export function DashboardLayout() {
  const { hideSidebar } = useLayoutContext();

  return (
    <div
      style={{
        ...styles.container,
        gridTemplateColumns: hideSidebar ? "80px auto" : "250px auto",
      }}
    >
      <Header />
      <Sidebar />
      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateAreas: `
            "sidebar header"
            "sidebar main"
        `,
    gridTemplateRows: "70px auto",
    transition: "0.3s",
  },
  main: {
    gridArea: "main",
    height: "calc(100vh - 70px)",
    padding: 20,
    overflowY: "auto",
    overflowX: "hidden",
  },
};
