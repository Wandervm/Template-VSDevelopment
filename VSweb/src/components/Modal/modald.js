import React from 'react';
import './estilo/modald.css';
import atv15 from '../../img/FOTOS PAGINA/atv15.jpeg';

export default function Modald({closeM}) {
 return (
   <div className='background'>
       <div className='container'>
           <button onClick={()=> closeM(false)}>X</button>
           <div className='left'>
           <img src={atv15}/>
           </div>
           <div className='rigth'>
               <h1>Aulas de Danças</h1>
               <p>Trabalho a coordenação motora, expressão facial, condicionamento físico e trabalho em equipe.
                   Acredito que a dança pode ajudar a mudar a realidade das nossas crianças e jovens, trabalhando a disciplina.
               </p>
           </div>

       </div> 
   </div>
 );
}