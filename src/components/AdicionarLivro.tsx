import React, { useState } from 'react';
import { Livro } from './types';

type Props = {
  handleAdicionarLivro: (livro: Livro) => void;
};

const AdicionarLivro: React.FC<Props> = ({ handleAdicionarLivro }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationYear, setPublicationYear] = useState<number | undefined>(undefined);
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = new Date().getTime(); // Geração de ID simples baseado no tempo
    const createdAt = new Date().toLocaleDateString(); // Data de criação formatada
    handleAdicionarLivro({ id, title, author, publicationYear: publicationYear || 0, createdAt, genre, description });
    setTitle('');
    setAuthor('');
    setPublicationYear(undefined);
    setGenre('');
    setDescription('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Título" />
      </div>
      <div>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required placeholder="Autor" />
      </div>
      <div>
        <input
          type="number"
          value={publicationYear || ''}
          onChange={(e) => setPublicationYear(parseInt(e.target.value))}
          required
          placeholder="Ano de Publicação"
        />
      </div>
      <div>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required placeholder="Gênero" />
      </div>
      <div>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required placeholder="Descrição" />
      </div>
      <button type="submit">Adicionar Livro</button>
    </form>
  );
};

export default AdicionarLivro;

