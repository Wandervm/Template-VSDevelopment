import styled from 'styled-components';

export const Container= styled.div`
 
    button{
      font-family: 'Hina Mincho';
      position: relative;
      width: 150px;
      height: 40px;
      border-style: none;
      background-color: #f6f8fc;
      border-radius: 9px;
      left: 14%;
      bottom: 75px;
      box-shadow: 3px 6px 15px rgba(13, 13, 14, 0.774);
    }
    button:hover{
        color: white;
        background-color: #7676c7;
        box-shadow: 3px 6px 15px rgb(7, 7, 7);
        transition: all 0.1s ease-out;
    }
`;