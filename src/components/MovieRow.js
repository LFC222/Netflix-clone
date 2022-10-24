/* eslint-disable import/no-anonymous-default-export */
import React,{useState} from 'react'
import 
{
  Img,
  ListItem,
  IconLeft,
  IconRight,
  MovieTittle,
  ItemContainer,
  ListContainer,
  MovieContainer,
} from './styles'
import { NavigateBefore } from '@material-ui/icons';
import { NavigateNext } from '@material-ui/icons';

export default function MovieRow({title,items}){

  const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
          x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }

        setScrollX(x);
    }

  return (

    <MovieContainer>
      <MovieTittle>{title}</MovieTittle>
      <IconLeft onClick={handleLeftArrow}>
        <NavigateBefore style={{fontSize:50}}/>
      </IconLeft>
      <IconRight onClick={handleRightArrow}>
        <NavigateNext style={{fontSize:50}}/>
      </IconRight>
      <ListContainer>
        <ListItem style=
        {{
          marginLeft:scrollX,
          width: items.results.length * 150
        }}>
          {items.results.length > 0 && items.results.map((item,key) => (
              <ItemContainer key={key}>
                <Img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
              </ItemContainer>
        ))}
        </ListItem>
      </ListContainer>
    </MovieContainer>

  );
}