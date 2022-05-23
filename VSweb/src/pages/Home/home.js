import React from 'react';
import { Carousel, Image } from 'antd';
import '../../styles/globalStyle.css';
import 'antd/dist/antd.css';
import Box from '../../components/Box';
import Btn from '../../components/Button';
import Grid from '../../components/Grid';
import Mvv from '../../components/Mvv';
import Gambiarra from '../../components/Gambiarra';



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
       <Box/>         
         <div className="atvDev">
            <p>Confira nossas atividades.</p>
            <h2>Atividades desenvolvidas</h2><br/>
            <Grid/>
            <h2>Quem somos.</h2><br/>
            <p>A fundado em 2007, o Projeto Visão Social é uma organização sem fins lucrativos que trabalha para levar assistência social à comunidade de Sobradinho (DF) e região. O Projeto é uma organização independente e neutra, por isso sua existência e trabalho efetivo dependem de doações e ações voluntárias da sociedade.</p>
            <Gambiarra/>
            <Mvv/>
            <div className="gale">
               <h2>Galeria</h2>
            <Image width={200} height={200} src={require('../../img/galehome/comida1.jpg')}/>
             <Image width={200} height={200} src={require('../../img/galehome/comida2.jpeg')}/> 
             <Image width={200} height={200} src={require('../../img/galehome/comida4.jpeg')}/> 
             <Image width={200} height={200} src={require('../../img/galehome/fts2.jpg')}/> 
             <Image width={200} height={200} src={require('../../img/galehome/fts17.jpeg')}/> 
             <Image width={200} height={200} src={require('../../img/galehome/fts18.jpg')}/> 
             <Image width={200} height={200} src={require('../../img/galehome/fts19.jpg')}/> 
             <Image width={200} height={200} src={require('../../img/galehome/fts23.jpg')}/> 
             <Image width={200} height={200} src={require('../../img/galehome/fts25.jpg')}/> 
             <Image width={200} height={200}src={require('../../img/galehome/fts29.jpg')}/> 
             <Image width={200} height={200} src={require('../../img/galehome/fts30.jpg')}/>
             <p style={{position:'relative', left:-485,color:333, fontFamily:'Hina Mincho'}}>© Copyright Projeto Visão Social 2022 - All Rights Reserved</p>
            </div>
         </div>
           
       </div> 


     
               
   </div>
 );
}