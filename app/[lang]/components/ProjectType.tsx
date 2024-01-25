import React from 'react';

const ProjectType = ({
  name,
  onClick,
  isSelected,
}: {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}) => {
  const activeStyle = isSelected
    ? 'border-blue-500 text-white'
    : 'border-slate-500 text-[#c2c2c2]';
  return (
    <button
      className={`rounded-full border-2 ${activeStyle} px-6 py-3 text-xl`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ProjectType;
