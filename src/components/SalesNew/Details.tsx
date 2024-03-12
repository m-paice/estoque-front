import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Colors } from "../Colors";
import { Sizes } from "../Sizes";

export function Details() {
  return (
    <div
      style={{
        height: 400,
        overflow: "auto",

        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar size="large" />
      </div>

      <div>
        <h4>Produto A</h4>
        <p
          style={{
            color: "gray",
            fontSize: 12,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div>
        <Colors
          colors={["#65F4DB", "#F465D5", "#ADB966"]}
          selectedColor=""
          handleSelectColor={() => {}}
        />
        <Sizes
          sizes={["P", "M", "G"]}
          selectedSize=""
          handleSelectedSize={() => []}
        />
      </div>
      <Button>Adicionar</Button>
    </div>
  );
}
