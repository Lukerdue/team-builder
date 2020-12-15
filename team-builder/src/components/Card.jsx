import React from 'react';
import styled from 'styled-components'

function Card(props){
    return(
        <CardStyle className="card">
            <div className='imgCont'>
                <img src={props.person.img}/>
            </div>
            <div className="info">
                <h3>{props.person.name}</h3>
                <p className="title">{props.person.role}</p>
                <p className="bio">{props.person.bio}</p>
            </div>
        </CardStyle>
    )

}
export default Card

const CardStyle = styled.div`
width: 40%;
display: flex;
padding: 4%;
background-color: navy;
border-radius: 100%;

.imgCont{
    width: 50%;
    padding: 3%;
}
img{
    width: 100%;
    border-radius: 15px;
}
.info{
    width: 45%;
    font-size: small;
    padding: 3%;
    background-color: powderblue;
    border-radius: 15px;
}
`