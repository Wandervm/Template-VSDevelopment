import React from 'react';
import '../../styles/globalStyle.css';
import '../../styles/acoes.css';
import 'antd/dist/antd.css';
import { Carousel, Image } from 'antd';
import bg4 from '../../img/bg4.jpg';
import card2 from '../../img/card2.png';

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
  <div className="paginaPrincipal">
       <h1>Atividades desenvolvidas</h1>
       <section className="atividades">
          <ol className="cardAtividades">
          <section className="bg" style={{ backgroundImage: `url(${card2})` }}></section>
             <section className="self">
               <img src={require('../../img/helena.jpeg')} />
               <h3>Helena Lafetá</h3>
               <h6>Atendimento Psicologico</h6>
               <p>Graduada em Psicologia pela Universidade de Brasília e pós-graduada em Neuropsicologia. Atuo na clínica com crianças e adolescentes desde 2018 e comecei o trabalho de acolhimento.</p>
             </section>
             <section className="box">
             <div id="boxAtividades">
                <h2 id="boxAtv">Atendimento Psicologico</h2>
                  <p id="boxAtv">O Projeto Visão Social conta com acompanhamento psicologico às crianças e familiares, tanto individualmente, quanto com a realização de grupos de conversa. Organizamos dinâmicas e oficinas para debate conscientização quanto ao uso de drogas e as diversas formas de violência.</p>
                  <button class="btn" style={{top:50,left:100}}><a>Saiba Mais</a></button>
                  <li >        
                      <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
                      <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
                      <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
                      <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
                      <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
                      <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>                
                   </li>
               </div>               
             </section>
             <section className="box">
             <section className="bg" style={{ backgroundImage: `url(${card2})` }}></section>
             <section className="self">
               <img src={require('../../img/galehome/img10.jpeg')} />
               <h3>Luciana Porto</h3>
               <h6>Coordenação Pedagogica</h6>
               <p>Curso tecnico em magistério, formada em pedagogia pela faculdade Icesp, Pós Graduada em Gestão e Orientação Educacional pela Universidade Unieuro.</p>
             </section> 
             <div id="boxAtividades">
                <h2 id="boxAtv">Acompanhamento Pedagogico</h2>
                  <p id="boxAtv">Coordena e Realiza atividades de reforço escolar no Projeto Visão Social, principalmente na área de alfabetização para crianças com dificuldade de aprendizagem. A metodologia de ensino utilizadas são aulas expositivas, atividades lúdicas e ensino construtivista.</p>
                  <button class="btn" style={{top:50,left:100}}><a>Saiba Mais</a></button>
                  <li>
          <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
          <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
          <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
          <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
          <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
          <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
        </li>
               </div>               
             </section>
             <section className="box">
             <section className="bg" style={{ backgroundImage: `url(${card2})` }}></section>
             <section className="self">
               <img src={require('../../img/ftinformatica/img002.jpg')} />
               <h3>Wander Marques</h3>
               <h6>Instrutor de Informatica</h6>
               <p>Engenheiro de Software, trabalho na area da tecnologia da informação a 10 anos.</p>
             </section> 
             <div id="boxAtividades">
                <h2 id="boxAtv">Inclusão Digital</h2>
                  <p id="boxAtv">O Projeto Visão Social possui um laboratório de informática que é mantido por doações da comunidade, nele as crianças deselvolvem habilidades básicas que consideramos essenciais para a nossa geração.</p>
                  <button class="btn" style={{top:50,left:100}}><a>Saiba Mais</a></button>
                  <li>
           <Image width={100} height={100} src={require('../../img/ftinformatica/informatica1.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftinformatica/informatica2.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftinformatica/informatica3.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftinformatica/informatica4.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftinformatica/informatica5.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftinformatica/informatica6.jpeg')}/>
        </li>
               </div>               
             </section>
             <section className="box">
             <section className="bg" style={{ backgroundImage: `url(${card2})` }}></section>
             <section className="self">
               <img src={require('../../img/ftmusica/img5.jpeg')} />
               <h3>Suellem Moraes</h3>
               <h6>Instrutora de Musica</h6>
               <p>Sou musicista 10 anos Formanda pela escola de música de Brasília, sou formada também licenciatura em História pela universidade leonado da Vinci.</p>
             </section> 
             <div id="boxAtividades">
                <h2 id="boxAtv">Aulas de Musica</h2>
                  <p id="boxAtv">O Projeto Visão Social acredita na musica como instrumento para o desenvolvimento psicomotor e intelectual de nossos alunos, desenvolvemos a oralidade, entonação, afinação e desenvolver o interesse dos alunos pela musica.</p>
                  <button class="btn" style={{top:50,left:100}}><a>Saiba Mais</a></button>
                  <li>
           <Image width={100} height={100} src={require('../../img/ftmusica/musica (1).jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftmusica/musica (2).jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftmusica/musica (3).jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftmusica/musica (10).jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftmusica/musica (5).jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftmusica/musica (6).jpeg')}/>
        </li>
               </div>               
             </section>
             <section className="box">
             <section className="bg" style={{ backgroundImage: `url(${card2})` }}></section>
             <section className="self">
               <img src={require('../../img/ftsreforco/img9.jpeg')} />
               <h3>Beatriz Rocha</h3>
               <h6>Professora de Reforço escolar</h6>
               <p>Formada em Agronomia com complementação em formação pedagógica para ensino em Biologia.</p>
             </section> 
             <div id="boxAtividades">
                <h2 id="boxAtv">Reforço Escolar</h2>
                  <p id="boxAtv">Realiza atividades de reforço escolar no Projeto Visão Social, principalmente nas áreas de matemática e língua portuguesa para crianças em situação de conflito. A metodologia de ensino utilizadas são aulas expositivas, atividades lúdicas e ensino construtivista.</p>
                  <button class="btn" style={{top:50,left:100}}><a>Saiba Mais</a></button>
                  <li>
           <Image width={100} height={100} src={require('../../img/ftsreforco/reforco1.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftsreforco/reforco14.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftsreforco/reforco3.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftsreforco/reforco4.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftsreforco/reforco5.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftsreforco/reforco6.jpeg')}/>
        </li>
               </div>               
             </section>
             <section className="box">
             <section className="bg" style={{ backgroundImage: `url(${card2})` }}></section>
             <section className="self">
               <img src={require('../../img/ftdanca/img6.jpeg')} />
               <h3>Jackson</h3>
               <h6>Instrutor de Dança</h6>
               <p>Sou instrutor de dança a 18 anos, hojê coreografo do grupo Df street participante do grupo conspiracao style campeao do campeonato em joemvile sc ja participei de varios projetos sociais importantes ex picasso nao pichava.</p>
             </section> 
             <div id="boxAtividades">
                <h2 id="boxAtv">Aulas de Dança</h2>
                  <p id="boxAtv">O Projeto Visão Social possui um laboratório de informática que é mantido por doações da comunidade, nele as crianças deselvolvem habilidades básicas que consideramos essenciais para a nossa geração.</p>
                  <button class="btn" style={{top:50,left:100}}><a>Saiba Mais</a></button>
                  <li>
          <Image width={100} height={100} src={require('../../img/ftdanca/danca1.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftdanca/danca2.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftdanca/danca3.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftdanca/danca4.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftdanca/danca7.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftdanca/danca6.jpeg')}/>
        </li>
               </div>               
             </section>
             <section className="box">
             <section className="bg" style={{ backgroundImage: `url(${card2})` }}></section>
             <section className="self">
               <img src={require('../../img/ftassistencia/img001.jpeg')} />
               <h3>Márcia dos Santos Barbosa</h3>
               <h6>Assistente Social</h6>
               <p>Assistente Social: CRESS-DF N⁰5462. Pós graduação em Gestão Social: Políticas Públicas Redes e defesa de direitos.</p>
             </section> 
             <div id="boxAtividades">
                <h2 id="boxAtv">Assistencia Social</h2>
                  <p id="boxAtv">Garante proteção social aos assistidos, apoio a individuos famílias e á comunidade no enfrentamento de suas dificuldades, por meio de serviços, benefícios e programas sociais.</p>
                  <button class="btn" style={{top:50,left:100}}><a>Saiba Mais</a></button>
                  <li>
           <Image width={100} height={100} src={require('../../img/ftassistencia/fts3.jpg')}/>
           <Image width={100} height={100} src={require('../../img/ftassistencia/fts12.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftassistencia/fts16.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftassistencia/fts20.jpg')}/>
           <Image width={100} height={100} src={require('../../img/ftassistencia/fts21.jpg')}/>
           <Image width={100} height={100} src={require('../../img/ftassistencia/fts22.jpg')}/>
                  </li>
               </div>               
             </section>
          </ol>
       </section>
       <p id='fot' style={{position:'relative', top:40, fontFamily:'Hina Mincho'}}>© Copyright Development V Wander Marques 2022. Projeto Visão Social - All Rights Reserved</p>
  </div>
</div>
 );
}