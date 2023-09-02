import Head from "./components/nav/nav";
import Chat from "./components/chat/Chat";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Head />
      <Routes>
      <Route exact path="/" element={<Chat/>} />
      </Routes>
    </>
  );
}
export default App;
