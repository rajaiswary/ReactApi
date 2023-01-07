import './App.css';
import {useEffect,useState} from "react";

function App() {


  const [news,setNews] = useState([])

  useEffect(()=>{
    fetch("https://api.spaceflightnewsapi.net/v3/articles").then((response)=>response.json()).then((data)=>{
      setNews(data);
      console.log(data);
    })
  },[]);

  return (
    <div className="App">
      <div className = "title">
      <h1>Space News</h1>

      </div>
      <div className = "newsContainer">
        {news.map((val,key)=>{
          return (<div key = {key} className = "article" onClick={()=>{window.location.href = val.url}} >
            <h3>{val.title}</h3>
            <img src = {val.imageUrl} alt = ""/>
            <p>{val.summary}</p>
            <h4>{val.publishedAt}</h4>

          </div>);
        })}

      </div>
      
    </div>
  );
}

export default App;
