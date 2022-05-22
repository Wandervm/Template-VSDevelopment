import styled from 'styled-components';


export const Cardvol = styled.div`
  display:inline-block;
  margin:20px;
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
 height: 300px;
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