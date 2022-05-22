import React from 'react';
import {Container} from './styles';
import banner0 from '../../img/banner0.jpeg';
import banner6 from '../../img/banner6.jpeg';
import banner5 from '../../img/banner5.jpg';
import banner4 from '../../img/banner4.jpeg';


export default function Grid(){
    return(<>
        <Container>
            <div>
            <img src={banner0}/>
            
            <h3>Marmita Solidaria</h3>
            <p>O Projeto Visão Social acolhe a comunidade com distribuição diaria de 100 a 250 marmitas para familias e moradores em situação financeiramente vulneravel, trabalhamos diretamnte com o cobate a fome e vulnerabilidade social levando suporte a alimentação atraves das marmitas e sextas basicas e de legumes que são entregues..</p>
            <a href='/about'>Veja mais atividades...</a>
            </div>

        </Container>
        <Container>
            <div>
            <img src={banner6}/>
            
            <h3>Combate às Drogas</h3>
            <p>A temática do combate e prevenção ao uso de drogas é uma espécie de eixo transversal no Visão Social, pois permeia todas as suas atividades, haja vista a situação de vulnerabilidade identificada em nossa comunidade. Realizamos palestras e incluímos a temática em todas as atividades pertinentes.</p>
            <a href='/about'>Veja mais atividades...</a>
            </div>

        </Container>
        <Container>
            <div>
            <img src={banner5}/>
            
            <h3>Recreação</h3>
            <p>Reconhecemos que nossa comunidade tem uma carência por atividades de lazer e, pensando nisso, o Visão Social oferece aulas de musicalização e dança.Nessas atividades estimulamos o desenvolvimento de habilidades fisicas e intelectuais que podem impactar nossos alunos também em sua futura vida profissional.</p>
            <a href='/about'>Veja mais atividades...</a>
            </div>

        </Container>
        <Container>
            <div>
            <img src={banner4}/>
            
            <h3>Direito de Brincar</h3>
            <p>O Projeto possui salão onde as crianças e adolescentes podem desenvolver brincadeiras e jogos de maneira saudável e supervisionada, a fim de fortalecerem seus vínculos. Em nossa sede temos pebolim, dama, xadrez, quebra-cabeça e diversos brinquedos pedagógicos.Assim ajudamos a preservar a infancia de nossas crianças.</p>
            <a href='/about'>Veja mais atividades...</a>
            </div>

        </Container>
                    

   </> );
}