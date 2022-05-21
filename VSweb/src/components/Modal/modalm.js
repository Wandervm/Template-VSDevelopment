import React from 'react';
import './estilo/modalm.css';
import atv7 from '../../img/FOTOS PAGINA/atv7.jpeg';

export default function Modalm({closeM}) {
 return (
   <div className='background'>
       <div className='container'>
           <button onClick={()=> closeM(false)}>X</button>
           <div className='left'>
           <img src={atv7}/>
           </div>
           <div className='rigth'>
               <h1>Aulas de Musica</h1>
               <p>As atividades realizadas pela oficina de musica no Projeto Visão Social tem como objetivo promover o desenvolvimento intelectual e psicomotor das crianças e adolescentes, atraves dos intrumentos ofertadosno projeto, sendo eles a Flauta doce, violão e o canto coral.</p>
           </div>

       </div> 
   </div>
 );
}