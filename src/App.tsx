import "./App.css";

import { useUser } from "./hooks/userUser";

function App() {
  const { user } = useUser();
  console.log(user);

  return <div>{user}</div>;
}

export default App;
