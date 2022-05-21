import React from 'react';
import './estilo/modalps.css';
import ftsm from '../../img/ftsm.jpeg';

export default function Modalps({closeM}) {
 return (
   <div className='background'>
       <div className='container'>
           <button onClick={()=> closeM(false)}>X</button>
           <div className='left'>
           <img src={ftsm}/>
           </div>
           <div className='rigth'>
               <h1>Atendimento Psicologico</h1>
               <p>A partir da realização de uma análise aprofundada do Projeto para compreender a sua cultura, valores e as especificidades da localidade em que está inserido, os jovens que o frequentam e a relação  com os funcionários, há um melhor entendimento da dinâmica da interação da instituição com o público alvo. 
                   Desenvolvimento de um trabalho de acompanhamento, acolhimento e orientação às crianças, adolescentes e seus familiares. 
                   Identificação e desconstrução de situações de conflitos e agressões, assim como a prevenção ao uso de álcool e outras drogas e às várias formas de violência. 
                   Organização de dinâmicas e oficinas em grupos que proporcionem uma maior integração e comunicação entre os jovens. 
                   </p>
           </div>

       </div> 
   </div>
 );
}