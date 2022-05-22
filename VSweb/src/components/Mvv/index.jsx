import React from 'react';
import {Container} from './styled';
import fts21 from '../../img/fts21.jpeg'
export default function Mvv(){
    return(<>
        <Container>
            <img src={fts21}/>
            <h3>Missão</h3>
            <p>O surgimento do Visão Social foi inspirado no sonho de concretizar os direitos básicos dos cidadãos brasileiros em nossa comunidade. Nossos valores estão alinhados à dignidade da pessoa humana e buscam:
                      Proteção à maternidade, à infância, à adolescência e à velhice
                      Segurança Alimentar
                      Defesa de Direitos da criança e adolescente
                      Enfrentamento da pobreza e da desigualdade social
                      Acesso e parmanência na escola
                      Combate e prevenção ao uso de drogas
                      Lutar pelo direito da criança e do adolescente em ter moradia e dignidade</p>
                      <a href='/contact'>Saiba mais...</a>
        </Container>
        <Container>
                    <img src={fts21}/>
                    <h3>Visão</h3>
                    <p>Um futuro em que a fome, a violência, o analfabetismo e o desemprego não sejam mais lembrados como fatos históricos de nossa comunidade.</p>
                    <a href='/contact'>Saiba mais...</a>
        </Container>
        <Container>
                <img src={fts21}/>
                <h3>Valores</h3>
                <p>Humanidade, Igualdade, Diversidade, Sustentabilidade, Transparência</p>
                          <a href='/contact'>Saiba mais...</a>
        </Container>
    </>);
}