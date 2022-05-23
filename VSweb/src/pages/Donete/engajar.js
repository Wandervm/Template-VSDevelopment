import React from 'react';
import '../../styles/globalStyle.css';
import fotofundo from '../../img/fotofundo.jpeg';

export default function Engajar() {
 return (
  <div className="inicio" style={{ backgroundImage: `url(${fotofundo})` }}>
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
  <div className="paginaPrincipalD">
    <h1>Faça uma doação</h1>
    <div>
       <img src={require('../../img/banner1.jpeg')}/>
    </div>
  </div>
</div>
 );
}