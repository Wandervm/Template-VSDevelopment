import styled from 'styled-components';


export const Container= styled.div`
 width: 400px; 
 display: inline-block;
 margin-bottom:30px;

 img{
     border-radius:19px;
 }
 @media(max-width: 900px){
     img{
         position: relative;
         right: 25px;
         width:80%;
         margin: 0%;
     }
 }
`;