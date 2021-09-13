import React, {useEffect, useState} from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';
import SearchAppBar from './search-repositors';
export default function Respositories(){
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        let repositoresName = localStorage.getItem('repositoriesName');
       if(repositoresName !== null){
            repositoresName = JSON.parse(repositoresName)
            setRepositories(repositoresName);
            localStorage.clear();
       }else{
            history.push('/')
       }
    }, []);
    return(
        <>
        <SearchAppBar>
         <S.Title>Repositorios</S.Title>
        </SearchAppBar>
        <S.Container>

        <S.List>
           {
               repositories.map(repository => {
                   return (
                       <S.ListItens>{ repository }</S.ListItens>

                   )
               })
           }
           <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.List>
        </S.Container>
        </>
    )
}