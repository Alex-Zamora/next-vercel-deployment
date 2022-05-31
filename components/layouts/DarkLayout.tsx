import { FC } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
};
