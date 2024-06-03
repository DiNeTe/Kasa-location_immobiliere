import React, { useState, ReactNode } from "react";

type CollapseProps = {
  title: string;
  children: ReactNode;
  className?: string;
};
// composant fonctionnel React
const Collapse: React.FC<CollapseProps> = ({ title, children,className }) => {
  // Gestion de l'État // useState = Hook React, permet de gérer l'état local dans le FC
  const [isOpen, setIsOpen] = useState(false);
  // inverse l'état de isOpen chaque fois que la fct toggle est appelé
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={`collapse ${className || ''}`}>
      {/* déclenche la fonction toggle lorsqu'il est cliqué */}
      <div className="collapse-header" onClick={toggle}>
        <div className="title-collapse">
        <span>{title}</span>
        </div>
        <button  className="collapse-toggle">
        {isOpen ? (
    <img src="/arrow-down.svg" alt="Expand" />
  ) : (
    <img src="/arrow-up.svg" alt="reduce" />
  )}
</button>
      </div>
      {/* Utilise une classe CSS pour contrôler l'affichage */}
      <div className={`collapse-body ${isOpen ? 'visible' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
