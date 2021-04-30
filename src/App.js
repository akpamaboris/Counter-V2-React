import "./App.css";
import DisplayCounter from "./DisplayCounter";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <h1>Display Counter</h1>
      <div className="container">
        <DisplayCounter />
      </div>
      <Footer />
    </div>
  );
};

export default App;
