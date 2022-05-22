import styled from 'styled-components';

export const Container= styled.div `
 position:relative ;
 left:5%;
 width:90%;
 height: 550px;
 background:linear-gradient(315deg, #dad7d7 20%, #121224 74%);
 box-shadow: 0px 3px 15px rgba(202, 197, 197, 0.548);
 border-radius: 9px;
 margin: 30px;
`;
export const Cardprof = styled.div`
  width:250px;
  position:relative;
  left:5%;
  top:15%;
  height: 100px;
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;


`;
export const CardInfo = styled.div`
 position: relative;
 top:100px;
 background-color:#f1f1f1bd;
 width:250px;
 height: 260px;
 border-bottom-left-radius: 9px;
 border-bottom-right-radius: 9px;
 

 img{
     position: relative;
     bottom: 70px;
     left: 30%;
     width:120px;
     height: 120px;
     border-radius: 50%;
     
 }
 p{
     position: relative;
     bottom:25%;
     font-family: 'Hina Mincho';
     text-align: center;
 }
 h2{
    position: relative;
     bottom:30%;
     font-family: 'Hina Mincho';
     text-align: center;
 }
 h4{
    position: relative;
     bottom:38%;
     font-size: 16px;
     font-family: 'Hina Mincho';
     text-align: center;
 }
`;

export const DescAtv = styled.div`
 position:relative;
 top:70px;
 left:30%;
 padding: 10px;

 h2{
     position: relative;
     bottom:100px;
     right: 250px;
    font-family: 'Hina Mincho';
     text-align: center;
 }
 h4{
    position: relative;
     width: 60%;
     bottom:90px;
     right: 20px;
     font-family: 'Hina Mincho';
     text-align: center;
 }
 
`;