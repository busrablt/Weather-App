import { createContext, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider=({children})=>{
    const [weatherData, setWeatherData] =useState ([])
    
    const values={
        weatherData,
        setWeatherData,
    };
    

    
     return(
         <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
     );
};

export default ThemeContext;