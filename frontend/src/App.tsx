import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  // useState is basically a get; set;
  //<string> is explicitaly setting the type of the useState. We could of infered the state using ("")
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  //using onClick is the equivalent of using a event listener in JS
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  }
  //Hover over events to find the type
  //Use SyntheticEvent type when having issues finding type of an event.
  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);
    if(typeof result === "string"){
      setServerError(result);
    } else if(Array.isArray(result.data)){
      setSearchResult(result.data)
    }
  }
  //Added conditional rendering of serverError for when response is a string. For example a network error.
  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      <CardList searchResults={searchResult}/>
      {serverError && <h1>{serverError}</h1>}
    </div>
  );
}

export default App;
