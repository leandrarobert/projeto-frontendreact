import { type } from "@testing-library/user-event/dist/type";
import { Container } from "./style";

const Header = (props) => {
  const lojaArray = [
    "brinquedo espacial 01",
    "brinquedo espacial 02",
    "brinquedo espacial 03",
    "brinquedo espacial 04"
  ]
}

const onChangeId = (e) => {
  props.setBuscaId(e.target.value)





  return ( 
   <Container>
    <h1>
      Astro Shop
    </h1>
    <div>
    <input type="number"
     placeholder="buscar por id"
       value={props.buscaId}
    />
    <input type= "text" placeholder="buscar por nome" />
    <select>
      <option value="">ordenar</option>
      <option value="">crescente</option>
      <option value="">decrescente</option>
    </select>
    <select name="tipo" id="tipo">
      <option value="">selecione um tipo</option>
       {lojaArray.map((type)) => (
        return (
          <option key={type} value={type}>
            {type}
          </option>
        )
       )
       }
    </select>

    </div>
   </Container>
  );


export default Header;
