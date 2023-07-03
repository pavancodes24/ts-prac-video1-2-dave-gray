import { ReactNode } from "react";

type ListProps<T> = {
  list: T[];
  render: (item: T) => ReactNode;
};
const List = <T,>({ list, render }: ListProps<T>) => {
  return (
    <div>
      <div>List of data </div>
      <ul>
   
    {list.map((item,i) =>( 
        // <li>{JSON.stringify(item)}</li>
        <li key={i}>{render(item)}</li>
    ))}
      </ul>
    </div>
  );
};

export default List;
