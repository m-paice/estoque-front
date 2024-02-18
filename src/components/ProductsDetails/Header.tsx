import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";

import { DeleteModal } from "./DeleteModal";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div style={styles.container}>
      <h4>Detalhes</h4>
      <div
        style={{
          display: "flex",
          gap: 20,
        }}
      >
        <PencilIcon width={20} color="gray" style={{ cursor: "pointer" }} />
        <TrashIcon
          width={20}
          color="gray"
          style={{ cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        />
      </div>

      <DeleteModal open={open} setOpen={setOpen} />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  },
};
