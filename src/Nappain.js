import './App.css';
import {useState} from "react"

function Nappain(props) {
  return (
        <button onClick={() => props.nappainPainettu(props.nappain)}>{props.nappain}</button>
  );
}

export default Nappain; 