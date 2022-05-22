import React from 'react';
import { Cardvol, CardInfo} from './style';
import card2 from '../../img/card2.png';

export default function CardVol(){
    return(<>
        <Cardvol style={{ backgroundImage: `url(${card2})` }}>
        <CardInfo>
        <img src={require('../../img/dep1.jpeg')} />
            <h2>Sol Siniscalchi</h2>
            <h4>Argentina</h4>
            <p>"Bem, o que dizer sobre a minha experiência. De longe, seis semanas pareciam uma eternidade e morando com tudos seis semanas no son nada. Mais este tempo teim muitas coisas positivas que eu me levo pra argentina. Isto ocorre porque, eu di tudo de mi y acabei recebendo duas vezes mais. .... muitos sorrisos e abraços me reencontraram."</p>

        </CardInfo>
        </Cardvol>
        <Cardvol style={{ backgroundImage: `url(${card2})` }}>
        <CardInfo>
                <img src={require('../../img/dep3.jpeg')} />
                    <h2>Gustavo Conteras</h2>
                    <h4>Colombia</h4>
                    <p>"Minha experiência em Visão Social Foi um momento maravilhoso e mágico do ano de 2018, foi minha primeira experiência trabalhando com crianças de todas as idades. Tanto que tive a oportunidade de viajar no mês de novembro de 2022 e pude ver a mudança que as crianças tiveram, muitos sorrisos e abraços me reencontraram."</p>
        
        </CardInfo>
        </Cardvol>
        <Cardvol style={{ backgroundImage: `url(${card2})` }}>
                        <CardInfo>
                        <img src={require('../../img/dep0.jpeg')} />
                            <h2>Shaheer</h2>
                            <h4>Inglaterra</h4>
                            <p>"Fui voluntário no projeto visao social por 6 semanas. Eu viajei de Londres e foi um prazer visitar e conhecer pessoas como Delma que se dedicam totalmente a ajudar crianças carentes, esta foi minha melhor experiência de viagem ao exterior até agora. Eu recomendaria definitivamente o voluntariado aqui!............................."</p>
                
                        </CardInfo>
        </Cardvol>
        <Cardvol style={{ backgroundImage: `url(${card2})` }}>
                                <CardInfo>
                                <img src={require('../../img/dep5.jpeg')} />
                                    <h2>Daniela</h2>
                                    <h4>Colombia</h4>
                                    <p>"Minha experiência em Visão Social Foi um momento maravilhoso e mágico do ano de 2018, foi minha primeira experiência trabalhando com crianças de todas as idades. Tanto que tive a oportunidade de viajar no mês de novembro de 2022 e pude ver a mudança que as crianças tiveram, muitos sorrisos e abraços me reencontraram."</p>
                        
                                </CardInfo>
        </Cardvol>
    </>);
}