import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

import ProductList from "./ProductList";
import Input from "./Input";

function App() {

  /// Estados da Lista de produtos
  const [products, setProducts] = useState([]);
  const [productsIsLoading, setProductsIsLoading] = useState(false);

  /// Estados do Formulário
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [btnCadastrarAtualizar, setBtnCadastrarAtualizar] = useState(true)
  const [idUpdate, setIdUpdate] = useState()


  /// Efeitos colaterais:
  useEffect(
    () => {
      console.log("<App /> Foi Montado");
      getProducts();
    }, []
  )

  /* REQUISITO: Utilizando o projeto disponibilizado, 
  você deverá criar uma requisição que é executada logo na montagem dos componentes 
  para buscar todos os produtos, cadastrados no servidor e mostrá-los, 
  através de uma lista, em um componente do sistema. */

  /// GET
  async function getProducts() {
    
    setProductsIsLoading(true)

    try {
      const response = await axios.get("api/products")
      const products = response.data.products;

      setProductsIsLoading(false);
      console.log(products)

      if(products.length > 0){
        setProducts(products)
      }else{
        setProducts([]);
      }
      
    } catch (error) {
      alert(`Ocorreu um erro: ${error}`)
    }

  }

  /// GET(ID):
  async function getProductById(event) {
    event.preventDefault()
    console.log("clicou no botão de editar");

    setIdUpdate(event.target.value)
    setProductsIsLoading(true)
    setBtnCadastrarAtualizar(false)
        
    try {
      const response = await axios.get(`api/products/${event.target.value}`)
      const product = response.data.product

      setProductsIsLoading(false);

      setTitle(product.title)
      setDescription(product.description)
      setCategory(product.category)
      setImage(product.image)
      setPrice(product.price)
      setStock(product.stock)

    } catch (error) {
      alert(`Ocorreu um erro: ${error}`)
    }

  }

  /// POST:
  async function createProduct(event) {

    event.preventDefault();
    console.log("clicou no botão de cadastar");

    const product = {
      title: title,
      description: description,
      price: price,
      stock: stock,
      category: category,
      image: image
    }

    console.log(product);

    /// Comunicação com a API
    const response = await axios.post("api/products", product);
    console.log(response);
    /// Atualizando as informações da tela, com o novo objeto (produto) cadastrado.
    getProducts();

  } 

  /// DELETE:
  async function deleteProduct(event) {

    event.preventDefault();
    console.log("clicou no botão de deletar");

    /// Comunicação com a API
    const response = await axios.delete(`api/products/${event.target.value}`);
    console.log(response);
    /// Atualizando as informações da tela, com o novo objeto (produto) cadastrado.
    getProducts();

  }  

  /// PUT:
  async function updateProduct(event) {
    console.log("Entrou em ciclo de atualização");
    console.log(event.target.value);

    event.preventDefault();

      const product = {
        title: title,
        description: description,
        price: price,
        stock: stock,
        category: category,
        image: image
      }
 
      /// Comunicação com a API
      const response = await axios.put(`api/products/${idUpdate}`, product);
      console.log(response);
      /// Atualizando as informações da tela, com o novo objeto (produto) cadastrado.
      getProducts();
  
  }  
  


  /// Validator:
  function formValidator() {

    if (title && description && price && stock && category && image) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }


  return (
    <>

      <h2>Cadastre seu produto</h2>

      <form>

        <Input
          title="Título"
          type="text"
          value={title}
          fnOnChange={(e) => setTitle(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="Descrição"
          type="text"
          value={description}
          fnOnChange={(e) => setDescription(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="Preço"
          type="text"
          value={price}
          fnOnChange={(e) => setPrice(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="Estoque"
          type="text"
          value={stock}
          fnOnChange={(e) => setStock(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="Categoria"
          type="text"
          value={category}
          fnOnChange={(e) => setCategory(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="IMG Url"
          type="text"
          value={image}
          fnOnChange={(e) => setImage(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <button
          hidden={!btnCadastrarAtualizar}
          disabled={!formIsValid}
          onClick={createProduct}>
          Cadastrar
        </button>

        <button
          hidden={btnCadastrarAtualizar}
          disabled={!formIsValid}
          onClick={updateProduct}>
          Atualizar
        </button>

      </form>

      {/* Lista de produtos */}
      <h2>Lista de produtos</h2>

      <ProductList
        productList={products}
        productsIsLoading={productsIsLoading}
        fnOnDelete={deleteProduct}
        fnOnEdit={getProductById}
      />

    </>
  );
}

export default App;
