import React from "react";
import {Container, ImgCard, SendMsg } from './style';
import { Input } from 'antd';
import bg1 from '../../img/bg1.jpeg';


const { TextArea } = Input;
const onChange = e => {
   console.log('Change:', e.target.value);
 };

export default function GridCont(){
    return(<>
        <ImgCard>
         <img src={bg1}/>
        </ImgCard>    
        <Container>
            <h4>Av. Central Conjunto 20 lote 01, Sobradinho 2, Distrito Federal, Brasil</h4>
            <h4>+55 61 3485-4568</h4>
            <h4>+55 61 9 9999-2351</h4>
            <h4>projetos.vs@hotmail.com</h4>
        <SendMsg>
        <Input placeholder="Digite seu nome" />
         <Input placeholder="Telefone" />
         <Input placeholder="E-mail" />
         <TextArea showCount maxLength={50} style={{position:'relative', width:300, top:110, }} onChange={onChange} />
         <button>Enviar</button>
        </SendMsg>
        </Container>  
    </>);
}