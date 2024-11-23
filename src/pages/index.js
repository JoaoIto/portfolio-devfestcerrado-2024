import React from 'react';
import { Cabecalho } from '../pages/components/cabecalho';
import { Titulo } from '../pages/components/title';
import { TituloSessao } from '../pages/components/tituloSessao';
import { Rodape } from '../pages/components/rodape';
/* import Favoritos from '../componentes/favoritos'; */ // Importando o novo componente

const projetos = [
  { nome: 'Projeto A', descricao: 'Descrição do projeto A' },
  { nome: 'Projeto B', descricao: 'Descrição do projeto B' },
  { nome: 'Projeto C', descricao: 'Descrição do projeto C' },
];

export default function Home() {
  return (
    <div className="app">
      <Cabecalho
        nome="Meu Portfólio"
        subtitulo="Bem-vindo ao meu espaço"
        descricao="Aqui você encontrará uma seleção dos meus projetos e experiências."
      />
      <Titulo nome="Projetos" subnome="Alguns dos meus trabalhos recentes" />
     {/*  <section className="projetos">
        {projetos.map((projeto, index) => (
          <Cartao
            key={index}
            titulo={projeto.nome}
            conteudo={projeto.descricao}
            botaoTexto="Ver Projeto"
            onClickBotao={() => alert(`Abrindo ${projeto.nome}`)}
          />
        ))}
      </section> */}
      {/* <Favoritos projetos={projetos} />  */}
      <TituloSessao titulo="Experiência e Educação" />
      <Rodape 
        linkGithub="https://github.com/JoaoIto"
        linkLinkedin="https://www.linkedin.com/in/joao-ito-b27b821b9/"
        linkEmail="mailto:joaoIto@gmail.com"
      />
    </div>
  );
}
