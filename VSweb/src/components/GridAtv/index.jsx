import React from 'react';
import {  Image } from 'antd';
import {Container,MediaFotos , Cardprof, CardInfo, DescAtv} from './style';
import card2 from '../../img/card2.png';


export default function GridAtv(){
    return(<>
        <Container>
            <Cardprof style={{ backgroundImage: `url(${card2})` }}>
            <CardInfo>
            <img src={require('../../img/helena.jpeg')} />
                <h2>Helena Lafetá</h2>
                <h4>Atendimento Psicologico</h4>
                <p>Graduada em Psicologia pela Universidade de Brasília e pós-graduada em Neuropsicologia. Atuo na clínica com crianças e adolescentes desde 2018 e comecei o trabalho de acolhimento.</p>

            </CardInfo>
            </Cardprof>
            <DescAtv>
                <h2>Atendimento Psicologico</h2>
                <h4>O Projeto Visão Social conta com acompanhamento psicologico às crianças e familiares, tanto individualmente, quanto com a realização de grupos de conversa. Organizamos dinâmicas e oficinas para debate conscientização quanto ao uso de drogas e as diversas formas de violência.</h4>
                <MediaFotos>
            <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
                      <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
                      <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
                      <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
                      <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
                      <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/> 
                      <button>Click</button>
                      </MediaFotos>
            </DescAtv>           
        </Container>
        <Container>
                <Cardprof style={{ backgroundImage: `url(${card2})` }}>
                <CardInfo>
                <img src={require('../../img/galehome/img10.jpeg')} />
                    <h2>Luciana Porto</h2>
                    <h4>Coordenação Pedagogica</h4>
                    <p>Curso tecnico em magistério, formada em pedagogia pela faculdade Icesp, Pós Graduada em Gestão e Orientação Educacional pela Universidade Unieuro.</p>
    
                </CardInfo>
                </Cardprof>
                <DescAtv>
                    <h2>Acompanhamento Pedagogico</h2>
                    <h4>Coordena e Realiza atividades de reforço escolar no Projeto Visão Social, principalmente na área de alfabetização para crianças com dificuldade de aprendizagem. A metodologia de ensino utilizadas são aulas expositivas, atividades lúdicas e ensino construtivista.</h4>
                    <MediaFotos>
                          <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
                          <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
                          <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
                          <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
                          <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
                          <Image width={100} height={100} src={require('../../img/galehome/comida1.jpg')}/>
                          <button>Click</button>
                    </MediaFotos> 
                </DescAtv>
               
        </Container>
        <Container>
                    <Cardprof style={{ backgroundImage: `url(${card2})` }}>
                    <CardInfo>
                    <img src={require('../../img/ftinformatica/img002.jpg')} />
                        <h2>Wander Marques</h2>
                        <h4>Instrutor de Informatica</h4>
                        <p>Engenheiro de Software, trabalho na area da tecnologia da informação a 10 anos.</p>
        
                    </CardInfo>
                    </Cardprof>
                    <DescAtv>
                        <h2>Inclusão Digital</h2>
                        <h4>O Projeto Visão Social possui um laboratório de informática que é mantido por doações da comunidade, nele as crianças deselvolvem habilidades básicas que consideramos essenciais para a nossa geração.</h4>
                        <MediaFotos>
                        <Image width={100} height={100} src={require('../../img/ftinformatica/informatica1.jpeg')}/>
                        <Image width={100} height={100} src={require('../../img/ftinformatica/informatica2.jpeg')}/>
                        <Image width={100} height={100} src={require('../../img/ftinformatica/informatica3.jpeg')}/>
                        <Image width={100} height={100} src={require('../../img/ftinformatica/informatica4.jpeg')}/>
                        <Image width={100} height={100} src={require('../../img/ftinformatica/informatica5.jpeg')}/>
                        <Image width={100} height={100} src={require('../../img/ftinformatica/informatica6.jpeg')}/> 
                        <button>Click</button>
                        </MediaFotos>
                    </DescAtv>
                   
        </Container>
        <Container>
                        <Cardprof style={{ backgroundImage: `url(${card2})` }}>
                        <CardInfo>
                        <img src={require('../../img/ftmusica/img5.jpeg')} />
                            <h2>Suellem Moraes</h2>
                            <h4>Instrutora de Musica</h4>
                            <p>Sou musicista 10 anos Formanda pela escola de música de Brasília, sou formada também licenciatura em História pela universidade leonado da Vinci.</p>
            
                        </CardInfo>
                        </Cardprof>
                        <DescAtv>
                            <h2>Aulas de Musica</h2>
                            <h4>O Projeto Visão Social acredita na musica como instrumento para o desenvolvimento psicomotor e intelectual de nossos alunos, desenvolvemos a oralidade, entonação, afinação e desenvolver o interesse dos alunos pela musica.</h4>
                            <MediaFotos>
                            <Image width={100} height={100} src={require('../../img/ftmusica/musica (1).jpeg')}/>
                            <Image width={100} height={100} src={require('../../img/ftmusica/musica (2).jpeg')}/>
                            <Image width={100} height={100} src={require('../../img/ftmusica/musica (3).jpeg')}/>
                            <Image width={100} height={100} src={require('../../img/ftmusica/musica (10).jpeg')}/>
                            <Image width={100} height={100} src={require('../../img/ftmusica/musica (5).jpeg')}/>
                            <Image width={100} height={100} src={require('../../img/ftmusica/musica (6).jpeg')}/> 
                            <button>Click</button>
                            </MediaFotos>
                        </DescAtv>
                       
        </Container>
        <Container>
                            <Cardprof style={{ backgroundImage: `url(${card2})` }}>
                            <CardInfo>
                            <img src={require('../../img/ftsreforco/img9.jpeg')} />
                                <h2>Beatriz Rocha</h2>
                                <h4>Professora de Reforço escolar</h4>
                                <p>Formada em Agronomia com complementação em formação pedagógica para ensino em Biologia.</p>
                
                            </CardInfo>
                            </Cardprof>
                            <DescAtv>
                                <h2>Reforço Escolar</h2>
                                <h4>Realiza atividades de reforço escolar no Projeto Visão Social, principalmente nas áreas de matemática e língua portuguesa para crianças em situação de conflito. A metodologia de ensino utilizadas são aulas expositivas, atividades lúdicas e ensino construtivista.</h4>
                                <MediaFotos>
                                <Image width={100} height={100} src={require('../../img/ftsreforco/reforco1.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftsreforco/reforco14.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftsreforco/reforco3.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftsreforco/reforco4.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftsreforco/reforco5.jpeg')}/>
           <Image width={100} height={100} src={require('../../img/ftsreforco/reforco6.jpeg')}/> 
           <button>Click</button>
           </MediaFotos>
                            </DescAtv>
                           
        </Container>
        <Container>
                                <Cardprof style={{ backgroundImage: `url(${card2})` }}>
                                <CardInfo>
                                <img src={require('../../img/ftdanca/img6.jpeg')} />
                                    <h2>Jackson</h2>
                                    <h4>Instrutor de Dança</h4>
                                    <p>Sou instrutor de dança a 18 anos, hojê coreografo do grupo Df street participante do grupo conspiracao style campeao do campeonato em joemvile sc ja participei de varios projetos sociais importantes ex picasso nao pichava.</p>
                    
                                </CardInfo>
                                </Cardprof>
                                <DescAtv>
                                    <h2>Aulas de Dança</h2>
                                    <h4>O Projeto Visão Social possui um laboratório de informática que é mantido por doações da comunidade, nele as crianças deselvolvem habilidades básicas que consideramos essenciais para a nossa geração.</h4>
                                    <MediaFotos>
                                    <Image width={100} height={100} src={require('../../img/ftdanca/danca1.jpeg')}/>
                                    <Image width={100} height={100} src={require('../../img/ftdanca/danca2.jpeg')}/>
                                    <Image width={100} height={100} src={require('../../img/ftdanca/danca3.jpeg')}/>
                                    <Image width={100} height={100} src={require('../../img/ftdanca/danca4.jpeg')}/>
                                    <Image width={100} height={100} src={require('../../img/ftdanca/danca7.jpeg')}/>
                                   <Image width={100} height={100} src={require('../../img/ftdanca/danca6.jpeg')}/>
                                   <button>Click</button>
                                   </MediaFotos>
                                </DescAtv>
                               
        </Container>
        <Container>
                                    <Cardprof style={{ backgroundImage: `url(${card2})` }}>
                                    <CardInfo>
                                    <img src={require('../../img/ftassistencia/img001.jpeg')} />
                                        <h2>Márcia dos Santos Barbosa</h2>
                                        <h4>Assistente Social</h4>
                                        <p>Assistente Social: CRESS-DF N⁰5462. Pós graduação em Gestão Social: Políticas Públicas Redes e defesa de direitos.</p>
                        
                                    </CardInfo>
                                    </Cardprof>
                                    <DescAtv>
                                        <h2>Assistencia Social</h2>
                                        <h4>Garante proteção social aos assistidos, apoio a individuos famílias e á comunidade no enfrentamento de suas dificuldades, por meio de serviços, benefícios e programas sociais.</h4>
                                        <MediaFotos>
                                        <Image width={100} height={100} src={require('../../img/ftassistencia/fts3.jpg')}/>
                                        <Image width={100} height={100} src={require('../../img/ftassistencia/fts12.jpeg')}/>
                                        <Image width={100} height={100} src={require('../../img/ftassistencia/fts16.jpeg')}/>
                                        <Image width={100} height={100} src={require('../../img/ftassistencia/fts20.jpg')}/>
                                        <Image width={100} height={100} src={require('../../img/ftassistencia/fts21.jpg')}/>
                                        <Image width={100} height={100} src={require('../../img/ftassistencia/fts22.jpg')}/>
                                        </MediaFotos>
                                    </DescAtv>
                                   
        </Container>
    </>);
}