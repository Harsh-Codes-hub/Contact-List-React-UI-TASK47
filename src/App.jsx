import { useState } from "react";
import FirstEntry from "./assets/layout/FirstEntry";
import NormalEntry from "./assets/layout/NormalEntry";
import { getUser } from "./assets/utils/storage";

const App = () => {
const [user, setUser] = useState(getUser());
  return (
    <>
      {user ? <NormalEntry /> : <FirstEntry setUser={setUser} />}
    </>
  );
};

export default App;
