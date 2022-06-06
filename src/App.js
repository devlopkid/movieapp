import './App.css';
import Banner from './Component/Banner/Banner';
import Navbar from './Component/Navbar/Navbar';
import RowPost from './Component/RowPost/RowPost';
import { originals,horror,documentry } from './Urls';
import { action } from './Urls';
import {comedy} from './Urls'

function App() {
  return (
    
        <div>
      <Navbar/>
     
    
      <Banner/> 
       <RowPost urls={action} title="Action"/>
       <RowPost urls={originals} title="RomanceMovies" />
       <RowPost urls={comedy} title="Comedy movies"/>
       <RowPost urls={horror} title="Horror movies"/>
       <RowPost urls={documentry} title="Documentry"/>
      
       </div>
       
  
  );
}

export default App;
