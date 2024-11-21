import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import ParkingSpace from './components/ParkingSpace';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <SignUp></SignUp>
      <ParkingSpace></ParkingSpace>
    </div>
  );
}

export default App;
