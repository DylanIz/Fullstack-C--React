import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';

function App() {
  // useState is basically a get; set;
  //<string> is explicitaly setting the type of the useState. We could of infered the state using ("")
  const [search, setSearch] = useState<string>();
  //using onClick is the equivalent of using a event listener in JS
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  }
  //Hover over events to find the type
  //Use SyntheticEvent type when having issues finding type of an event.
  const onClick = (e: SyntheticEvent) => {
    console.log(e);
  }
  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <CardList />
    </div>
  );
}

export default App;
