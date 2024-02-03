
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Products from './Components/Products/product';
import {Container} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Products />
      </Container>
    </div>
  );
}

export default App;
