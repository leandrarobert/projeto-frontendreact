
import { useState } from 'react';
import Header from './components/header/Header';
import Produtoscreen from './components/produtos/Produtoscreen';


function App() {
  
  const [buscaId, setbuscaId] = useState ("")
  
  return (
    <div>
     <Header/>
     buscaId=(buscaId)
     setbuscaId=(setbuscaId)
      
      <Produtoscreen/>
    </div>
    
  );
}

export default App;
