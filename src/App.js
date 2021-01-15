import './App.css';
import {ThemeProvider} from './contexts/ThemeContext';
import WeatherData from './components/WeatherData'
import Button from './components/Button'
import Input from './components/Input'


function App() {
  
  
  return (
    <ThemeProvider>
    <div >
      <div className="search">
        <Input/>
        <Button/>
      </div>
    <WeatherData/> 
    
    </div>
    </ThemeProvider>
  );
}
  

export default App