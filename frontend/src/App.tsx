import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

// useState is basically a get; set;
//<string> is explicitaly setting the type of the useState. We could of infered the state using ("")
//using onClick is the equivalent of using a event listener in JS
//Hover over events to find the type
//Use SyntheticEvent type when having issues finding type of an event.
//Added conditional rendering of serverError for when response is a string. For example a network error.
