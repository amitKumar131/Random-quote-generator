import React ,{ useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] =useState('Press the Button');
  const apiData =()=>{
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "0557169bdfmsh4022b091addbd90p1e1ef7jsn75b2351eb1d2"
	}
})
.then(response => {
  return response.json();
	
})
.then((data)=>{
    setQuote(data.content);
})
.catch(err => {
	console.error(err);
});
  }
  return (
    <div className='background'>
      <div className="App">
        <p  className="container">{quote}</p> 
      </div>
      <button className='btn' onClick={apiData}>Generator Quote</button>
    </div>
  );
}

export default App;
