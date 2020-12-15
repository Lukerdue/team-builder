import React from 'react';
import Card from './Card';
import styled from 'styled-components';

function CardWrapper(props){

return(
    <Wrapper className="cardWrapper">
        {props.team.map(m=>{
            return <Card person={m} key={m.name}/>
        })}
    </Wrapper>
)
}
export default CardWrapper

const Wrapper = styled.div`
max-width: 85%;
display: flex;
flex-direction: wrap;
background-color: dodgerblue;
padding: 10%;
justify-content: space-around;
`