import React, { MouseEventHandler } from "react";

const TabButton = ({
  isActive,
  selectTab,
  children,
}: {
  isActive: Boolean;
  selectTab: () => void;
  children: React.ReactNode;
}): React.ReactNode => {
  const buttonClasses = isActive
    ? "text-white border-b border-blue-600"
    : "text-[#c2c2c2]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
