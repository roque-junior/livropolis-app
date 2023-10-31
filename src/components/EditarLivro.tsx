import React, { useState } from 'react';
import { Livro } from './types';

type Props = {
  livro: Livro;
  handleEditLivro: (livro: Livro) => void;
};

const EditarLivro: React.FC<Props> = ({ livro, handleEditLivro }) => {
  const [editedLivro, setEditedLivro] = useState<Livro>(livro);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleEditLivro(editedLivro);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <input type="text" value={editedLivro.title} onChange={(e) => setEditedLivro({ ...editedLivro, title: e.target.value })} required />
      </div>
      <div>
        <input type="text" value={editedLivro.author} onChange={(e) => setEditedLivro({ ...editedLivro, author: e.target.value })} required />
      </div>
      <div>
        <input
          type="number"
          value={editedLivro.publicationYear}
          onChange={(e) => setEditedLivro({ ...editedLivro, publicationYear: parseInt(e.target.value) })}
          required
        />
      </div>
      <div>
        <input type="text" value={editedLivro.genre} onChange={(e) => setEditedLivro({ ...editedLivro, genre: e.target.value })} required />
      </div>
      <div>
        <textarea value={editedLivro.description} onChange={(e) => setEditedLivro({ ...editedLivro, description: e.target.value })} required />
      </div>
      <button type="submit">Salvar Alterações</button>
    </form>
  );
};

export default EditarLivro;




