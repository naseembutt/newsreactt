import { useState } from "react"; 
import Header from "./components/header/Header";
import NewsList from "./components/NewsList";
import { newsData } from "./utils/data";

export default function App() {
  const [news, setNews] = useState(newsData);
  const [active, setActive] = useState(false); 

  const getKeywords = (event) => {
    let value = event.target.value;
    let keywords = value.toLowerCase(); 
    
    // Check karega ke input khali hai ya nahi
    setActive(value.length > 0); 

    let filtered = newsData.filter((item) => {
      return item.title.toLowerCase().indexOf(keywords) > -1;
    });
    
    setNews(filtered);
  };

  return (
    <div className="App">
      {/* active prop Header ko bheja ja raha hai */}
      <Header getKeywords={getKeywords} active={active} />
      <NewsList news={news} />
    </div>
  );
}