import styled from "styled-components";

export const Container = styled.section`
    font-family: 'Hina Mincho';
    position: absolute;
    left: 60%;
    top:150px;
    padding:30px;
    text-align: center;
    width:300px;
    border-radius: 3px;
    border-bottom: 1px solid rgb(4, 0, 240);   
    height:450px;
    background:linear-gradient(315deg, #dad7d7 20%, #121224 74%);
    box-shadow: 0px 3px 15px rgb(12, 12, 12);  

 h1{
    font-size:30px;
   font-family: 'Hina Mincho', serif; 
   border-bottom: 1px solid rgb(3, 3, 3);
}
p{
    border-radius: 3px;
    box-shadow: 0px 3px 15px rgb(12, 12, 12);
    font-size:20px;
    font-family: 'Hina Mincho', serif; 
}
#bbb{
    position: relative;
    top:100px;
    right: 40px;
}
@media(max-width: 900px) {
    position: relative;
    left: 30px;
    top: 50px;
  }
`;