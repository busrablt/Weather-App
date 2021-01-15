import { useContext } from "react";

import ThemeContext from "../contexts/ThemeContext";


function Button() {
    const { weatherData,setWeatherData } = useContext(ThemeContext);
    const APP_KEY='5c9649fa840e499e832150503211301'
    let cityinput=''
    async function getdata(value){
        const data=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=10`)
          const result=await data.json();
          setweatherdata(result.forecast.forecastday )
      console.log(result.forecast.forecastday)
     }
    

    
    return ( 
        <div>
            <button onClick={()=>getdata(cityinput)}>Search</button>
        </div>
    )
}

export default Button
