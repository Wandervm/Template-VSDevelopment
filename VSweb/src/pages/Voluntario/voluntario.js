import React from 'react';
import '../../styles/voluntario.css';
import '../../styles/globalStyle.css';
import bg5 from '../../img/bg5.jpg';
import card2 from '../../img/card2.png';
import fts12 from '../../img/fts12.jpg';
import pngegg0 from '../../img/pngegg0.png';

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
  <div className="paginaPrincipal">
    <h1> Torne-se um voluntario</h1>
    <section className="vol" style={{ backgroundImage: `url(${fts12})` }}>
       <div className="cadVol">
          <label id="voluntarios">Nome</label> <input/><br/>
          <label id="voluntarios">Telefone</label> <input/><br/>
          <label id="voluntarios">E-mail</label> <input/><br/>
          <label id="voluntarios">Endereço</label> <input/><br/>
          <button className="btn" id='vbtn'>Enviar</button>
       </div>
    </section>
    <section className="depoimentos">
       <h1>Depoimentos</h1>
       <ol>
                <li>
                <section className="bg" style={{ backgroundImage: `url(${card2})` }}></section>
                <section className="self">
                   <img src={require('../../img/dep1.jpeg')} />
                   <h3>Sol Siniscalchi</h3>
                   <h6>Argentina</h6>
                   <p>"Bem, o que dizer sobre a minha experiência. De longe, seis semanas pareciam uma eternidade e morando com tudos seis semanas no son nada. Mais este tempo teim muitas coisas positivas que eu me levo pra argentina. Isto ocorre porque, eu di tudo de mi y acabei recebendo duas vezes mais. .... muitos sorrisos e abraços me reencontraram."</p>
                </section> 
                </li>
                <li>
                <section className="bg" style={{ backgroundImage: `url(${card2})` }}></section>
                <section className="self">
                   <img src={require('../../img/dep3.jpeg')} />
                   <h3>Gustavo Conteras</h3>
                   <h6>Colombia</h6>
                   <p>"Minha experiência em Visão Social Foi um momento maravilhoso e mágico do ano de 2018, foi minha primeira experiência trabalhando com crianças de todas as idades. Tanto que tive a oportunidade de viajar no mês de novembro de 2022 e pude ver a mudança que as crianças tiveram, muitos sorrisos e abraços me reencontraram.</p>
                </section> 
                </li>
                <li>
                <section className="bg" style={{ backgroundImage: `url(${card2})` }}></section>
                <section className="self">
                   <img src={require('../../img/dep0.jpeg')} />
                   <h3>Shaheer</h3>
                   <h6>Inglaterra</h6>
                   <p>"Fui voluntário no projeto visao social por 6 semanas. Eu viajei de Londres e foi um prazer visitar e conhecer pessoas como Delma que se dedicam totalmente a ajudar crianças carentes, esta foi minha melhor experiência de viagem ao exterior até agora. Eu recomendaria definitivamente o voluntariado aqui!"</p>
                </section> 
                </li>
                <li>
                <section className="bg" style={{ backgroundImage: `url(${card2})` }}></section>
                <section className="self">
                   <img src={require('../../img/dep5.jpeg')} />
                   <h3>Daniela</h3>
                   <h6>Colombia</h6>
                   <p>"Minha experiência em Visão Social Foi um momento maravilhoso e mágico do ano de 2018, foi minha primeira experiência trabalhando com crianças de todas as idades. Tanto que tive a oportunidade de viajar no mês de novembro de 2022 e pude ver a mudança que as crianças tiveram, muitos sorrisos e abraços me reencontraram.</p>
                </section> 
                </li>
       </ol>
    </section>

    <p style={{position:'relative', top:40, fontFamily:'Hina Mincho'}}>© Copyright Development V Wander Marques 2022. Projeto Visão Social - All Rights Reserved</p>
  </div>   
</div>
 );
}