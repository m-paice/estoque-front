import { useState } from "react";
import { Switch as SwitchComponent } from "@headlessui/react";

export function Switch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <SwitchComponent
      checked={enabled}
      onChange={setEnabled}
      style={{
        backgroundColor: "white",
        borderRadius: 9999,
        padding: 2,
        width: 60,
        border: "1px solid #D9D9D9",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          display: "block",
          backgroundColor: "#e34954",
          borderRadius: "50%",
          width: 20,
          height: 20,
          transform: `translateX(${enabled ? 33 : 0}px)`,
          transition: "transform 0.3s",
          cursor: "pointer",
        }}
      />
    </SwitchComponent>
  );
}
