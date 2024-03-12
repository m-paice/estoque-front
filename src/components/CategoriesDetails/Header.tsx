import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";

import { DeleteModal } from "./DeleteModal";
import { useNavigate, useParams } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const handleClickDelete = () => {
    navigate(`/categories/${id}/delete`);
  };

  const handleClickUpdate = () => {
    navigate(`/categories/${id}/edit`);
  };

  return (
    <div>
      <div style={styles.container}>
        <h4>Detalhes</h4>
        <div
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          <PencilIcon
            width={20}
            color="gray"
            style={{ cursor: "pointer" }}
            onClick={handleClickUpdate}
          />
          <TrashIcon
            width={20}
            color="gray"
            style={{ cursor: "pointer" }}
            onClick={handleClickDelete}
          />
        </div>
      </div>
      <DeleteModal />
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
