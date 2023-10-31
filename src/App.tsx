import React, { useState } from 'react';
import './styles.css';
import AdicionarLivro from './components/AdicionarLivro';
import LivroItem from './components/LivroItem';
import EditarLivro from './components/EditarLivro';
import { Livro } from './components/types';

const App: React.FC = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [livroParaEditar, setLivroParaEditar] = useState<Livro | null>(null);
  const [livroSelecionado, setLivroSelecionado] = useState<Livro | null>(null);
  const [mostrarForm, setMostrarForm] = useState<boolean>(false);

  const handleAdicionarLivro = (livro: Livro) => {
    setLivros([...livros, livro]);
    setMostrarForm(false);
  };

  const handleExcluirLivro = (id: number) => {
    const novosLivros = livros.filter((livro) => livro.id !== id);
    setLivros(novosLivros);
    if (livroParaEditar && livroParaEditar.id === id) {
      setLivroParaEditar(null);
    }
  };

  const handleEditLivro = (livroEditado: Livro) => {
    const livrosAtualizados = livros.map((livro) =>
      livro.id === livroEditado.id ? livroEditado : livro
    );
    setLivros(livrosAtualizados);
    setLivroParaEditar(null);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Biblioteca Mágica de Livrópolis</h1>
      </div>
      {mostrarForm ? (
        <AdicionarLivro handleAdicionarLivro={handleAdicionarLivro} />
      ) : (
        <button className="adicionar-button" onClick={() => setMostrarForm(true)}>
          Adicionar Livro
        </button>
      )}
      <h2>Visualizar Livros</h2>
      {livros.map((livro) => (
        <div key={livro.id} className="livro-preview">
          <h3>{livro.title}</h3>
          <p>Autor: {livro.author}</p>
          <p>Ano de Publicação: {livro.publicationYear}</p>
          <button onClick={() => setLivroSelecionado(livro)}>Ver Detalhes</button>
          <button onClick={() => handleExcluirLivro(livro.id)}>Excluir</button>
        </div>
      ))}
      {livroSelecionado && (
        <div className="detalhes-livro">
          <h2>Detalhes do Livro</h2>
          <p>Título: {livroSelecionado.title}</p>
          <p>Autor: {livroSelecionado.author}</p>
          <p>Ano de Publicação: {livroSelecionado.publicationYear}</p>
          <p>Data de Cadastro: {livroSelecionado.createdAt}</p>
          <p>Gênero: {livroSelecionado.genre}</p>
          <p>Descrição: {livroSelecionado.description}</p>
          <button onClick={() => setLivroSelecionado(null)}>Fechar</button>
          <button onClick={() => setLivroParaEditar(livroSelecionado)}>Editar</button>
        </div>
      )}
      {livroParaEditar && (
        <div className="detalhes-livro">
          <h2>Editar Livro</h2>
          <EditarLivro livro={livroParaEditar} handleEditLivro={handleEditLivro} />
        </div>
      )}
    </div>
  );
};

export default App;

