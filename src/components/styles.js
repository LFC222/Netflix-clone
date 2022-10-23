import styled from "styled-components";

export const MovieContainer = styled.div`
    margin-bottom: 30px;
`;

export const MovieTittle = styled.h2`
    margin: 0px 0px 0px 30px ;
`;

export const ListContainer = styled.div`
    overflow-x: hidden;
    padding-left:30px;
`;

export const ItemContainer = styled.div`
    display: inline-block;
    width:150px;
    cursor: pointer;
`;

export const ListItem = styled.div`
    width:999999999px ;
`;

export const Img = styled.img`
    width: 100% ;
    transform: scale(0.9);
    transition: all ease 0.2s;

    &:hover{
        transform: scale(1) ;
    }
`;

export const FeaturedSection = styled.section`
    height:100vh;
    background-size:cover;
    background-position:center;
`;

export const LinearVertical = styled.div`
    width:inherit;
    height:inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const LinearHorizontal = styled.div`
    width:inherit;
    height:inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display:flex;
    flex-direction: column ;
    justify-content:center;
    padding-left:30px;
    padding-top:70px;
    padding-bottom:150px;
`;

export const Name = styled.div`
    font-size: 60px;
    font-weight:bold;
`;

export const InfoContainer = styled.div`
    font-size:18px;
    font-weight:bold;
    margin-top: 15px;
`;

export const Score = styled.div`
    display: inline-block;
    margin-right:15px;
    color: #46d369
`;

export const Year = styled.div`
    display: inline-block;
    margin-right:15px;
`;

export const Seasons = styled.div`
    display: inline-block;
    margin-right:15px;
`;

export const DescriptionContainer = styled.div`
    margin-top:15px;
    font-size:20px;
    color:#999;
    max-width:40%;
`;


export const ButtonsContainer = styled.div`
    margin-top:15px;
`;

export const WatchButton = styled.a`
    display: inline-block;
    font-size:20px;
    font-weight:bold;
    padding: 12px 25px;
    border-radius:5px;
    text-decoration: none;
    margin-right:10px;
    background-color:#fff;
    color:#000 ;
    opacity: 1;
    transition: all ease 0.2s ;

    &:hover{
        opacity:0.7;
    }
`;

export const ListButton = styled.a`
    display: inline-block;
    font-size:20px;
    font-weight:bold;
    padding: 12px 25px;
    border-radius:5px;
    text-decoration: none;
    margin-right:10px;
    background-color:#333;
    color:#fff;
    opacity:1;
    transition: all ease 0.2s ;

    &:hover{
        opacity:0.7;
    }
`;


export const Genres = styled.div`
    margin-top:15px;
    font-size:18px;
    color:#999;
`;

export const Lists = styled.section`
    margin-top: -150px;
`;

export const Header = styled.header`
    position:fixed;
    z-index:999;
    top:0;
    left:0;
    right:0;
    height:70px;
    display:flex ;
    padding: 0 30px ;
    justify-content:space-between;
    align-items:center;
`;

export const HeaderContainer = styled.div`
    height:25px ;
`;

export const UserConatainer = styled.div`
    height:35px;
`;

export const LogoUser = styled.img`
    height:100% ;
    border-radius:3px;
`;

export const LogoNetflix = styled.img`
    height:100% ;
`;

export const Footer = styled.footer`
    margin: 50px 0;
    text-align: center;
`;