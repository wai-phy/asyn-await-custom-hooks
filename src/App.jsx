import useToggle from "./hooks/useToggle";

function App() {
  const [ isShow, toggle] = useToggle(true);
  return (
    <div className="App">
      <button
        onClick={toggle}
      >
        {isShow ? "Hide" : "Show"}
      </button>
      {isShow && <h1>Components are showing</h1>}
    </div>
  );
}

export default App;
