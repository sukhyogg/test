
import './App.css';
import Header from './Components/Header';
import { SearchBar } from './SearchBar';
import { useState } from 'react';
import { people } from './Components/data';

function App() {
  const [data, setdata] = useState('');
  
  return (
    <div className="App">
      <SearchBar
        data = {data}
        filtertext = {setdata}    
      />
     <Header
       people = {people}
       data = {data}
      
     /> 
     
    </div>
  );
}

export default App;
