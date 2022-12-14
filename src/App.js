import './App.css';
import {useState} from "react"
import Nappain from './Nappain';

//let nappaimet = ["0","1","2","3","4","5","6","7","8","9",".","+-","+", "-", "*","/", "=","clear"];
let nappaimet = ["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+-","+","nollaa","="];

function App() {
  const [teksti, setTeksti] = useState("");
  //console.log("tila", tila)
  // tila = true //setTila (false)
  const nappainPainettu = (x) => {
    if (x === "=" && teksti.length !== 0) {
      setTeksti(eval(teksti));
      return;
    }

    if (x === "=") {
      return;
    }

    if (x === "nollaa") {
      setTeksti("");
      return;
    }

    // vaihda etumerkkiä
    if (x === "+-") {
      if (teksti[0] === "-") {
          setTeksti(teksti.slice(1))
        } else setTeksti("-" + teksti);
      return;
      }

    // ei kahta merkkiä peräkkäin
    const merkit = [".","+","-","*","/"]
    if (merkit.includes(teksti[teksti.length-1]) && merkit.includes(x)){
      return;
    }
    
    setTeksti(teksti+x);
  }

  const [tausta, setTausta] = useState("green");

  const muutaTausta = () => {
    setTausta(tausta==="green" ? "yellow" : "green");
  }

  return (
    <div className={'fill ' + tausta}>
    <div className='koko'>
      <div className='naytto'>
        <p>{teksti}</p>
      </div>
      <div className='nappaimet'>
        {nappaimet.map((nappain, index) => <Nappain key={index} nappainPainettu={nappainPainettu} nappain={nappain} />)}
      </div>
      <div><button className={'styleButton ' + tausta} onClick={muutaTausta}></button></div>
    </div>
    </div>
  );
}

export default App;
