import { useState } from "react";
import axios from "axios";

const Form = () => {
 const [city, setCity] = useState("");
 const getWeather = (e) => {
  e.preventDefault();
  axios.get("http://api.weatherapi.com/v1/current.json?key=52b6ce11cb6b4f9c9b3113117231802&q=London&aqi=no").then(res => console.log(res))
 }
 return (
  <form>
   <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
   <button type="submit" onClick={getWeather}>Get Weather</button>
  </form>
 );
};

export default Form;