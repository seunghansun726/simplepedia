import react from 'react';
import './styles/App.css';
import './styles/Navbar.css';
import './styles/context.css'
import data from '/Users/seung-han/Documents/simplepedia/src/data/data.json';
import { useState } from 'react/cjs/react.development';


export default function App() {

  let [database, setdatabase] = useState(data.sort((a,b) => (a.title > b.title) ? 1 : -1));
  let [navBar, setnavBar] = useState("not yet clicked");
  let navArray = undefined;


  if (data !== null) {
    navArray = database.map(item => 
      item.title.charAt(0)
    );
    navArray = Array.from(new Set(navArray));
    function navOnClick(e){
      setnavBar(e.target.innerHTML);
    }
    function NavList(props) {
      return(
        <ul class="Nav">
          {props.temp.map((item, index)=>{
            return <li key={index} onClick={(e) => navOnClick(e)}>{item}</li>
          })}
        </ul>
      );
    }
    return (
      <div>
      <h1>Simplepedia</h1>
      <ul>
        <NavList temp={navArray}></NavList>
        <p>{navBar}</p>
      </ul>
    </div>
    );
  } else {
    return(
      <div>
        <h1>
          Error
        </h1>
      </div>
    )
  }
}
