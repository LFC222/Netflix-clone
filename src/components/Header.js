/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import 
{
    Header,
    LogoUser,
    LogoNetflix,
    UserConatainer,
    HeaderContainer,
} from './styles';

export default () => {
    return(
        <Header>
            <HeaderContainer>
                <a href="/">
                    <LogoNetflix src="https://upload.wikimedia.org/wikipedia/commons/archive/6/69/20220504140801%21Netflix_logo.svg"/>
                </a>
            </HeaderContainer>
            <UserConatainer>
                <a href="/">
                    <LogoUser src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user"/>
                </a>
            </UserConatainer>
        </Header>
    );
}