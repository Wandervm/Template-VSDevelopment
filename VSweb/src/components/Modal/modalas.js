import React from 'react';
import './estilo/modal.css';
import atv44 from '../../img/FOTOS PAGINA/atv44.jpeg';

export default function Modalas({closeM}) {
 return (
   <div className='background'>
       <div className='container'>
           <button onClick={()=> closeM(false)}>X</button>
           <div className='left'>
           <img src={atv44}/>
           </div>
           <div className='rigth'>
               <h1>Inclusão Digital</h1>
               <p>No Projeto Visão Social estamos constantemente de olho nas novas tecnologias
e inovações que surgem ao nosso redor e acreditamos que a inclusão digital
pode ajudar a mudar a realidade dos jovens e crianças atendidas no projeto com o foco em ensinar tecnologias
e habilidade requeridas pelo mercado de trabalho.
Possuimos um laboratorio de informatica mantido por doações dos nossos padrinhos,
nele são ministradas aulas de Informatica Basica e Programação que atende jovens de 9 a 19 anos.</p>
           </div>

       </div> 
   </div>
 );
}