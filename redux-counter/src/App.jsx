import "./App.css";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/header";
import Container from "./components/Container";
import Controls from "./components/Controls";

function App() {
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header />
        <div className="col-lg-6 mx-auto">
          <DisplayCounter/>
          <Controls/>
        </div>
      </Container>
    </center>
  );
}

export default App;
