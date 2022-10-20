import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar'
import Footer from "./components/footer"
import { Link } from "react-router-dom"
import Body from './components/body';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
