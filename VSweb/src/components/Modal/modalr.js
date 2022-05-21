import React from 'react';
import './estilo/modalr.css';
import atv44 from '../../img/FOTOS PAGINA/atv44.jpeg';

export default function Modalr({closeM}) {
 return (
   <div className='background'>
       <div className='container'>
           <button onClick={()=> closeM(false)}>X</button>
           <div className='left'>
           <img src={atv44}/>
           </div>
           <div className='rigth'>
               <h1>Reforço Escolar</h1>
               <p>
Realiza atividades de reforço escolar no Projeto Visão Social, juntamente com a Pedagoga, principalmente nas áreas de matemática, geometria, ciências e língua portuguesa para crianças em situação de conflito entre 6 a 14 anos.
A metodologia de ensino utilizadas são aulas expositivas, atividades lúdicas e ensino construtivista, com base nos documentos da BNCC.</p>
           </div>

       </div> 
   </div>
 );
}