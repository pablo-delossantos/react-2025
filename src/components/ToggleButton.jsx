import { useState } from "react";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button onClick={() => setIsActive(!isActive)}>
      <i
        className={
          isActive ? "fa-regular fa-circle-check" : "fa-solid fa-ban"
        }
      ></i>
      {isActive ? " Activo" : " Inactivo"}
    </button>
  );
};

export default ToggleButton;
