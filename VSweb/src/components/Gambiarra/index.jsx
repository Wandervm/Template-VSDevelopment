import React from "react";
import comida3 from '../../img/comida3.jpeg';
import {Container} from './style';


export default function Fts(){
    return(<>
        <Container>
            <div>
                 <img src={comida3}/>
            </div>            
        </Container>
                <Container>
                <div>
                     <img src={comida3}/>
                </div>            
            </Container>
                    <Container>
                    <div>
                         <img src={comida3}/>
                    </div>            
                </Container>
    </>);

}