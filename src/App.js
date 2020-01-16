import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [photo, setPhoto] = useState("")
  const [clientId, setCliendId] = useState("09465ee0b43bf274a0c67732a9a8f75faad53b2495ee077947cf0fca6a68bfe5")
  const [result, setResult] = useState([])

  function handleChange(event) {
    setPhoto(event.target.value)
  }

  function handleClick(event) {
    console.log(photo)

    const url = "https://api.unsplash.com/search/photos?page=1&query="+photo+"&client_id="+clientId

    axios.get(url)
    .then((response) => {
      console.log(response)
      setResult(response.data.results)
    })
  }
 
  return (
    <div>
      <div className="app">
        <h1>Unsplash Search Photo</h1>
        <p className="water">by viskoos for freelancehunt</p>
        <input 
          className="input"
          type="text"
          name="photo"
          placeholder="Search photo"
          onChange={handleChange}
        />
        <button className="btn" type="submit" onClick={handleClick}>Search</button>
      </div>
      <div className="uspImages">
        {result.map((photo) => (
          <div className="jojo"><img src={photo.urls.small} /></div>
        ))}
      </div>
      
    </div>
  )
}

export default App;
