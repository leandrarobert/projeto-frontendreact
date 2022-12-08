import { useState } from "react";
import Header from "../header/Header";
import produtos from "../produtos/produtos.json"

function Produtoscreen() {

   const [carrinho,setCarrinho] = useState("")

   

   console.log({carrinho})

   const mapeiaprodutos = produtos.map((produto)=>{
      return (
         <div>
        <img src={produto.imagem}/>    
        <h1>{produto.name}</h1>
       <h5>R$:{produto.valor} </h5>
       <button onClick={()=>{setCarrinho([produto.id])}}>Comprar</button> 
      
       </div>
      )
   })









    return (
     <div>
        <Header/>
        <h1>Produtos screen</h1>
        {mapeiaprodutos}
     </div>
     
    );
  }
  
  export default Produtoscreen;