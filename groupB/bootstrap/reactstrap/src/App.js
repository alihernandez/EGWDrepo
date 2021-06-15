import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbortron from './Components/Jumbotron/Jumbotron';
import Nbar from './Components/NavBar/navBar';
import CardComp from './Components/Card/Card';

import { Button } from 'react-bootstrap/';

function App() {
  return (
    <div className="App">

      <Nbar />

    <Jumbortron />
    <CardComp />
    <br/>
    <Button>Button</Button>


      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.4/umd/react.production.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.4/umd/react-dom.production.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"></script>

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      ></link>
    </div>
  );
}

export default App;
