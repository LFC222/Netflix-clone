/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import 
{
  Img,
  ListItem,
  MovieTittle,
  ItemContainer,
  ListContainer,
  MovieContainer,
} from './styles'

export default function MovieRow({title,items}){
  return (

    <MovieContainer>
      <MovieTittle>{title}</MovieTittle>
      <ListContainer>
        <ListItem>
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