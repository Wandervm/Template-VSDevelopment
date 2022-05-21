import React from 'react';
import { Carousel, Image } from 'antd';
import '../../styles/globalStyle.css';
import 'antd/dist/antd.css';



export default function Home() {
 return (
   <div className="inicio">
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
       <div className="paginaPrincipal" >
         <h1>Solidariedade é amor em movimento.</h1><br/>
         <div className="slide">
         <Carousel autoplay="true">
           <div><img src={require('../../img/danca5.jpeg')} /></div>
           <div><img src={require('../../img/bg2.jpeg')} /></div>
           <div><img src={require('../../img/fts20.jpeg')} /></div>
           <div><img src={require('../../img/fts27.jpg')} /></div>
         </Carousel>            
         </div>

         <p style={{position:'relative', top:40, fontFamily:'Hina Mincho'}}>© Copyright Development V Wander Marques 2022. Projeto Visão Social - All Rights Reserved</p>         
       </div>          
   </div>
 );
}