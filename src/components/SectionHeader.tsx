import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const SectionHeader = ({ title, children, setCount }: SectionProps) => {
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <>
      <div>SectionHeader</div>
      <h1>{title}</h1>
      <h3>{children}</h3>
      <button onClick={increment}>increment</button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button onClick={decrement}>decrement</button>
    </>
  );
};

export default SectionHeader;
