import React from 'react';
import '../../styles/globalStyle.css';
import '../../styles/contact.css';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import fotofundo from '../../img/fotofundo.jpeg';

const { TextArea } = Input;
const onChange = e => {
   console.log('Change:', e.target.value);
 };


export default function Contact() {
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
  <div className="paginaPrincipal">
     <h1>Entre em contato</h1>
     <div className="ps9left">
         <img src={require('../../img/bg1.jpeg')}/>
       </div>
       <div className="ps9rigth">
         <div className="txtc">
         <p> Av. Central Conjunto 20 lote 01, Sobradinho 2, Distrito Federal, Brasil</p><br/>
         <p> +55 (61) 3485-4568</p><br/>
         <p> +55 (61) 9 9999-2351</p><br/>
         <p> projetos.vs@hotmail.com</p><br/>           
         </div>
         <section className="infoC">
            <h2>Envie uma menssagem</h2>
         <Input placeholder="Digite seu nome" />
         <Input placeholder="Telefone" />
         <Input placeholder="E-mail" />
         <TextArea showCount maxLength={50} style={{position:'relative', height: 120, width:300, top:110 }} onChange={onChange} />
         </section>
         <button className="btn" id="send">Enviar</button>
     </div> <p style={{position:'relative', top:40, fontFamily:'Hina Mincho'}}>© Copyright Development V Wander Marques 2022. Projeto Visão Social - All Rights Reserved</p>        
    
  </div> 
</div>
 );
} 