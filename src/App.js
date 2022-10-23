import React,{useEffect, useState} from "react";
import MovieRow from "./components/MovieRow";
import Tmdb from "./Tmdb";
import './App.css'
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import 
{
  Lists,
  Footer,
} from './components/styles'

export function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);


      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMoveInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);
    }
    loadAll();
  },[]);

  return (
    <>
      <div>
        <Header />
        {
          featuredData &&
          <FeaturedMovie item={featuredData}/>
        }
        <Lists>
          {
            movieList.map((item, key) => (
              <MovieRow key={key} title = {item.title} items = { item.items}/>
            ))
          }
        </Lists>
        <Footer >
          Feito com <span role="img" aria-label="coração"> ❤</span><br/>
          Direitos de imagens para Netflix<br/>
          Dados pegos do site themoviedb.org
        </Footer>
      </div>
    </>
  );
}

export default App;