
import { FiSearch } from 'react-icons/fi';
import './style.css';
import api from './services/api';
import { useState } from 'react';


function App() {

  const[input,setInput] = useState('');
  const[cep,setCep] = useState({});  /*vai começar como vazio */ 


  async function handleSearch(){

    if(input === ''){ //se input for igual a nada "preencha algum cep"
      alert("preencha algum cep")
     return;
  }
  try{    
  
  const response = await api.get(`${input}/json`);
  setCep(response.data)  /*passar o valor do useState para response.data  */
  setInput("");
  
   
  }catch{  
  alert('erro ao buscar aqui');
  setInput("");
  }
  
  }
  
  
  return (
    <div className="container">
     <h2 className='title'>Buscador CEP</h2>

      <div className='containerInput'>
        <input
        type="text"
        placeholder="Digite seu cep..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button className='buttonSearch' onClick={handleSearch}>
        <FiSearch size={25} color="#fff"/>  
        </button>
        </div> 

        <main className='main'>
          <h3>CEP: {cep.cep}</h3>  
          <span>localidade: {cep.localidade}</span> 
          <span>Rua: {cep.logradouro}</span> 
          <span>bairro: {cep.bairro}</span> 
          <span>Cidade:{cep.uf}</span>
          <span>DDD:{cep.ddd}</span>
       
         
        
        </main>
    </div>
  );
}

export default App;

  /*          / colocar as propiedades que retonar no .json por exemplo;logradouro,cep etc
*/
