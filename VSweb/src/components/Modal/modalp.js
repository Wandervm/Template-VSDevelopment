import React from 'react';
import './estilo/modalp.css';
import atv33 from '../../img/FOTOS PAGINA/atv33.jpeg';

export default function Modalp({closeM}) {
 return (
   <div className='background'>
       <div className='container'>
           <button onClick={()=> closeM(false)}>X</button>
           <div className='left'>
           <img src={atv33}/>
           </div>
           <div className='rigth'>
               <h1>Acompanhamento Pedagogico</h1>
               <p>No Projeto Visão Social são oferecidas aulas de reforço escolar com o companhamento da pedagoga e da educadora social as turmas são separadas de acordo com a faixa etaria e as atividades são desenvolvidas de acordo com a necessidade de cada criança e adolescente atendida no Projeto. Todas as atividades trabalhadas são equiparadas. A metodologia empregada é socio constrututivista onde a criança e o adolescente são estimulados a buscar o conhecimento e construir o aprendizado de forma ludica e dinamica.</p>
           </div>

       </div> 
   </div>
 );
}