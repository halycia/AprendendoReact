import './App.css';
import HelloWorld from './components/HelloWorld';
import MeChamePeloSeuNome from './components/MeChamePeloSeuNome';
import Pessoa from './components/Pessoa';
import PessoaVersaoII from './components/PessoaVersaoII';

function App() {

  const name = 'Haly'
  const newName = name.toUpperCase()

  const nome = 'Maria'

  function sum(a, b) {
    return a + b
  }

  const url = "https://via.placeholder.com/120"

  return (
    <div className="App">
      {/*Aula 03*/}
      <h1>Brincando com o React</h1>
      <p>Olá, {name}!</p>
      <p>Olá, {newName}!</p>
      <p>Soma: {2 + 2}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Imagem dinâmica" />

      {/*Aula 04*/}
      <HelloWorld />

      {/*Aula 05 */}
      <MeChamePeloSeuNome nome='Guilherme' />
      <MeChamePeloSeuNome nome='Haly' />
      <MeChamePeloSeuNome nome={nome} />
      <Pessoa 
      nome="Haly" 
      idade="?" 
      profissao="aspirante a prog" 
      foto={url} />
      <PessoaVersaoII 
      nome="Haly" 
      idade="?" 
      profissao="aspirante a prog"
      foto={url} />
    </div>
  );
}

export default App;
