import React from 'react';
import { Livro } from './types';

type LivroItemProps = {
  livro: Livro;
  handleDelete: (id: number) => void;
  handleViewDetails: (id: number) => void;
};

const LivroItem: React.FC<LivroItemProps> = ({ livro, handleDelete, handleViewDetails }) => {
  return (
    <div className="livro-item">
      <h2>{livro.title}</h2>
      <p>Autor: {livro.author}</p>
      <p>Ano de Publicação: {livro.publicationYear}</p>
      <p>Data de Criação: {livro.createdAt}</p>
      <p>Gênero: {livro.genre}</p>
      <p>Descrição: {livro.description}</p>
      <button onClick={() => handleViewDetails(livro.id)}>Ver Detalhes</button>
      <button onClick={() => handleDelete(livro.id)}>Excluir</button>
    </div>
  );
};

export default LivroItem;
