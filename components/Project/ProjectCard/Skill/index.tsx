import React from "react";
import { Skills } from "../../../../types";
import { Icons } from "../../../../utils/icons";

interface Props {
  name: Skills;
  index: number;
}

const Skill: React.FC<Props> = ({ name }) => {
  const Icon = (Icons as any)[name];

  return (
    <div className="w-8 h-8">
      <Icon size={20} />
    </div>
  );
};

export default Skill;
