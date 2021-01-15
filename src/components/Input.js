import { useContext } from "react";

import ThemeContext from "../contexts/ThemeContext";


function Input() {
  
  let cityinput=''
  function cityText()
  {
  document.querySelector('input').addEventListener('input',(e)=>{
    e.preventDefault();
    cityinput= e.target.value;
    console.log(cityinput)
  })
  }
    return (
        <div>
             <input type='text' placeholder='Şehirler' onChange={cityText}></input>
        </div>
    )
}

export default Input
