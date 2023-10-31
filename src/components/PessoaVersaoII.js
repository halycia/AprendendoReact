function PessoaVersaoII ({nome, idade, profissao, foto}) {
    {/*Usando o props de uma maneira menos poluída*/}
    return (
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}
export default PessoaVersaoII;