import React, { useState, ReactNode } from "react";
import "../sass/collapse.scss";

type CollapseProps = {
  title: string;
  children: ReactNode;
};

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <div className="collapse-header">
        <div className="title-collapse">
        <span>{title}</span>
        </div>
        <button onClick={toggle} className="collapse-toggle">
        {isOpen ? (
    <img src="../../public/arrow-down.svg" alt="Expand" />
  ) : (
    <img src="../../public/arrow-up.svg" alt="reduce" />
  )}
</button>
      </div>
      {isOpen && <div className="collapse-body">{children}</div>}
    </div>
  );
};

export default Collapse;
