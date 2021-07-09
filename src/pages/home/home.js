
import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import {useHistory} from 'react-router-dom';
function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false)
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositores = response.data;
      const repositoresName = [];
      repositores.map((repository) => {
        repositoresName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoresName));
      setErro(false);
      history.push('/repositories')
    }).catch(Error =>{
      setErro(true)
    
    });
    
  }
  return (
    <S.HomeContainer>
      <S.Content>
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg>: ''}
    </S.HomeContainer>

  );
}

export default App;

