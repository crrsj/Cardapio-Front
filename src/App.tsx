
import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useCardapioData } from './components/hooks/useCardapioData';
import { CriarModal } from './components/criar-modal/criar-modal';


function App() {
  const { data }= useCardapioData();
  const [isModalOpen,setIsModalOpen ] = useState(false) ;

  const handleOpenModal = () =>{
    setIsModalOpen(prev => !prev)
 
    
  }
  return (
    
      <div className='container'>
       <h1>Cardápio</h1>
       <div className='card-grid'>
        {data?.map(cardapioData => 
        <Card 
        preco = {cardapioData.preco}
        titulo = {cardapioData.titulo}
        imagem = {cardapioData.imagem}
        />
        )}
         
       </div>
           {isModalOpen && <CriarModal fecharModal={handleOpenModal}/>}
           <button onClick={handleOpenModal}>Novo</button>
      </div>
     
  )
}

export default App
