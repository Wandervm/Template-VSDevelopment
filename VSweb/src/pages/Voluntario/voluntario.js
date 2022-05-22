import React from 'react';
import '../../styles/voluntario.css';
import '../../styles/globalStyle.css';
import bg5 from '../../img/bg5.jpg';
import fts12 from '../../img/fts12.jpg';
import CardVol from '../../components/GridVol';

export default function Voluntario() {
 return (
  <div className="inicio" style={{ backgroundImage: `url(${bg5})` }}>
  <div className="cardGlobal">
    <h1>Projeto Visão Social</h1>
    <p>Solidariedade é amor em movimento.</p>       
  </div>
  <div className="socialMedia">
         <div class="wrapper">
         <div class="button">
            <div class="icon">
               <i class="fab fa-facebook-f"></i>
            </div>
            <span><a href="https://pt-br.facebook.com/projetovisaosocial/ "target="_blank">Facebook</a></span>
         </div>
         <div class="button">
            <div class="icon">
               <i class="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
         </div>
         <div class="button">
            <div class="icon">
               <i class="fab fa-instagram"></i>
            </div>
            <span><a href="https://www.instagram.com/projetovisaosocial/ "target="_blank">Instagram</a></span>
         </div>
         <div class="button">
            <div class="icon">
               <i class="fab fa-youtube"></i>
            </div>
            <span><a href="https://www.youtube.com/channel/UCqaixVhjtwwFNFbK57zhxwA "target="_blank">YouTube</a></span>
         </div>
         </div>
       </div>
  <div className="paginaPrincipalV">
    <h1> Torne-se um voluntario</h1>
    <section className="vol" style={{ backgroundImage: `url(${fts12})` }}>
    </section>
    <section className="depoimentos">
       <h1>Depoimentos</h1>
       <CardVol/>
    </section>
  </div>   
</div>
 );
}