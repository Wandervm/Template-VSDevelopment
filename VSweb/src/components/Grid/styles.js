import styled from 'styled-components';

export const Container = styled.div`
 position:relative ;
 display: inline-block;
 margin:30px;
 width:350px;
 height: 100%;
 border-radius: 10px;
 box-shadow: 0 3px 15px rgb(7, 7, 7);
 background-color: #f1f1f1;

 img{
     position: relative;
     bottom:30px;
     width:350px;
     border-radius:19px;
 }
 h3{
     font-family: 'Hina Mincho';
     position: relative;
     bottom: 35px;
     right: 70px;
 }
 p{
    font-family: 'Hina Mincho';
     position: relative;
     bottom: 35px;
     color:rgb(123, 128, 154);
 }
 a{
     position:relative;
     bottom: 15px;
     left:25%;
 }
 @media(max-width: 900px){
     position: relative;
     width: 90%;
     top: 20px;
     margin: 0%;
     margin-bottom: 30px;
     img{
        width: 310px;
     }
 }
`;