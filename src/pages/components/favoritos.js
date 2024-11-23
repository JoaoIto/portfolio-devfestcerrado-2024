// Favoritos.js
import React, { useState } from 'react';

export function Favoritos ({ projetos }) { // Componente Favoritos recebe a lista de projetos como props
    const [favoritos, setFavoritos] = useState([]); // Cria um estado para armazenar os projetos favoritos
  
    // Função para adicionar ou remover projetos dos favoritos
    const toggleFavorito = (projetoNome) => {
      // Verifica se o projeto já está na lista de favoritos
      if (favoritos.includes(projetoNome)) {
        // Se estiver, remove o projeto da lista
        setFavoritos(favoritos.filter(nome => nome !== projetoNome));
      } else {
        // Se não estiver, adiciona o projeto à lista
        setFavoritos([...favoritos, projetoNome]);
      }
    };

  return (
    <div className="favoritos-container">
      <h2>Projetos:</h2>
      <section className="projetos">
        {projetos.map((projeto, index) => (
          <div key={index} className="projeto-card">
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
            <button
              className={`favorito-button ${favoritos.includes(projeto.nome) ? 'remove' : 'add'}`}
              onClick={() => {
                toggleFavorito(projeto.nome);
                alert(`${favoritos.includes(projeto.nome) ? 'Removido' : 'Adicionado'} ${projeto.nome} aos favoritos`);
              }}
            >
              {favoritos.includes(projeto.nome) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            </button>
          </div>
        ))}
      </section>
      <div>
        {favoritos.length > 0 ? (
          <ul className="favoritos-list">
            {favoritos.map((favorito, index) => (
              <li key={index}>{favorito}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhum projeto favorito adicionado.</p>
        )}
      </div>
    </div>
  );
};

export default Favoritos;
