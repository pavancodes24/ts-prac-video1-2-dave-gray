import { useState ,useEffect,useCallback} from "react";

import "./css/App.css";
import SectionHeader from "./components/SectionHeader";
import List from "./components/List";

interface User {
  id:number,
  username: string,
}
function App() {
  const [count, setCount] = useState<number>(1);
  const [user,setUser] = useState<User[]|null>(null)


  useEffect(()=>{
    console.log('mounting')

    return ()=>console.log('unmounting')
  },[user])
  return (
    <>
      hello
      <SectionHeader setCount={setCount} title="SectionTitle">
        The count is : {count}
      </SectionHeader>
      <List
        list={["coffee ☕️", "Tacos 🌮", "code 💻"]}
        render={(item) => <span>{item}</span>}
      />
    </>
  );
}

export default App;
