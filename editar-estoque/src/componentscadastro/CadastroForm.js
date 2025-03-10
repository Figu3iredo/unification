import React, { useState } from "react";
import { FaBox, FaUpload } from "react-icons/fa"; 
import "./CadastroForm.css"; 

const CadastroForm = () => {
  const [codigo, setCodigo] = useState("");
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados enviados: ", { codigo, nome, categoria, preco, quantidade, descricao, imagem });
    
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImagem(file);
    console.log("Imagem carregada: ", file);
  };

  const handleCancel = () => {
    setCodigo("");
    setNome("");
    setCategoria("");
    setPreco("");
    setQuantidade("");
    setDescricao("");
    setImagem(null);
    console.log("Cadastro cancelado");
  };

  return (
    <div className="cadastro-container">
      <h2>
        <FaBox style={{ marginRight: '10px', fontSize: '24px' }} />
        Editar Produto
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Código do Produto</label>
            <input
              type="text"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Nome do Produto</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Categoria</label>
            <input
              type="text"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Preço</label>
            <input
              type="number"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Quantidade</label>
            <input
              type="number"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-buttons">
          <button type="submit">Editar</button>
        </div>

        <label classname=".cancel-button">
        <button type="submit" className="cancel-button" onClick={handleCancel}>Cancelar</button>
        </label>
      </form>
      <label className="image-upload">
        <FaUpload style={{ marginRight: '5px' }} />
        Adicionar Imagem
        <input type="file" onChange={handleImageUpload} />
      </label>
    </div>
  );
};

export default CadastroForm;
