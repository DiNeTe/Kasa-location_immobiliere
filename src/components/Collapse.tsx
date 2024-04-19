import React, { useState, ReactNode } from "react";
import "../sass/collapse.scss";

type CollapseProps = {
  title: string;
  children: ReactNode;
};

// composant fonctionnel React
const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  // Gestion de l'État // useState = Hook React, permet de gérer l'état local dans le FC
  const [isOpen, setIsOpen] = useState(false);
  // inverse l'état de isOpen chaque fois que la fct toggle est appelé
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <div className="collapse-header">
        <div className="title-collapse">
        <span>{title}</span>
        </div>
        {/* déclenche la fonction toggle lorsqu'il est cliqué. */}
        <button onClick={toggle} className="collapse-toggle">
        {isOpen ? (
    <img src="../../public/arrow-down.svg" alt="Expand" />
  ) : (
    <img src="../../public/arrow-up.svg" alt="reduce" />
  )}
</button>
      </div>
      {/* apparaît que si isOpen est true. */}
      {isOpen && <div className="collapse-body">{children}</div>}
    </div>
  );
};

export default Collapse;
