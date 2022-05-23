import styled from 'styled-components';

export const Container = styled.div`
 position: absolute;
 left: 13px;
 top: 95px;
 width: 570px;
 border-radius: 9px;
 height: 380px;
 background-color:#f1f1f18a;
 box-shadow: 3px 9px 30px rgb(10, 10, 10);

 h4{
     position:relative;
     top:100px;
     text-align: center;
     font-size: 20px;
     font-family: 'Hina Mincho';
     
 }
 @media(max-width: 900px){
     position: relative;
     top: -208px;
     width: 90%;
     height: 35%;
     h4{
         position: relative;
         top: 25px;
         width: 100%;
         font-size: 20px;
     }
 }
`;
export const ImgCard = styled.div`
 width:580px;
 img{
     position: relative;
     left:10px;
     width:100%;
     border-radius: 9px;
     box-shadow: 3px 9px 30px rgb(10, 10, 10)
     
 }
 @media(max-width: 900px){
     width: 90%;
 }
`;
export const SendMsg = styled.div`
 position: relative;
 bottom:100px;
 left: 680px;
 width: 400px;
 @media(max-width: 900px){
     position: relative;
     top:10px;
     left: 10px;
     width: 90%;
 }
`;