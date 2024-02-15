import Header from "./components/header/Header.jsx";
import Main from "./pages/Main/Main";

function App() {
  return (
    <>
      <Header />
      <div className="p-[24px] min-h-screen">
        <Main />
      </div>
    </>
  );
}

export default App;
