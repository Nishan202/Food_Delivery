import Header from "./Components/Layout/Header";
import "./styles.css";
import Meals from "./Components/Meals/Meals";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}
