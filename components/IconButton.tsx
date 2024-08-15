import { MouseEventHandler } from "react";

type Props = {
  className?: string;
  icon: React.ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const IconButton = ({ icon, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white rounded-full p-2 transition hover:scale-110 cursor-pointer flex items-center justify-center border shadow-md`}
    >
      {icon}
    </button>
  );
};
