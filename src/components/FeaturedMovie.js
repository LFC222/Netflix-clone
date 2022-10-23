import React from "react";
import 
{
    Name,
    Year,
    Score,
    Genres,
    Seasons,
    ListButton,
    WatchButton,
    LinearHorizontal,
    InfoContainer,
    LinearVertical,
    FeaturedSection,
    ButtonsContainer,
    DescriptionContainer,
} from'./styles';

export default function FeaturedMovie({item}){

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres){
        genres.push( item.genres[i].name )
    }


    return(
        <FeaturedSection style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
            <LinearVertical>
                <LinearHorizontal >
                    <Name>{item.original_name}</Name>
                    <InfoContainer>
                        <Score>{item.vote_average} pontos</Score>
                        <Year>{firstDate.getFullYear()}</Year>
                        <Seasons>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</Seasons>
                    </InfoContainer>
                    <DescriptionContainer>{item.overview}</DescriptionContainer>
                    <ButtonsContainer>
                        <WatchButton href={`/watch/${item.id}`}>► Assistir</WatchButton>
                        <ListButton href={`/list/add/${item.id}`}>+ Minha Lista</ListButton>
                    </ButtonsContainer>
                    <Genres><strong>Gêneros:{' '}</strong>{genres.join(', ')}</Genres>
                </LinearHorizontal>
            </LinearVertical>
        </FeaturedSection>
    );
}