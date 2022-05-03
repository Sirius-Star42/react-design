import "./App.css";
import backgroundImage from "./Images/Background.jpg";

import MainLayout from "./components/layouts/MainLayout";

export default function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <MainLayout />
    </div>
  );
}
