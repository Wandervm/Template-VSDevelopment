import React from 'react';
import '../../styles/globalStyle.css';
import 'antd/dist/antd.css';
import bg4 from '../../img/bg4.jpg';
import GridAtv from '../../components/GridAtv';

export default function About() {
 return (
  <div className="inicio" style={{ backgroundImage: `url(${bg4})` }}>
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
  <div className="paginaPrincipalA">
       <h1>Atividades desenvolvidas</h1>
       <GridAtv/>
  </div>
</div>
 );
}