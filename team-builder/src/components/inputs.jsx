import React from 'react';
import styled from 'styled-components'

function Inputs(props){
    return(
        <Formstyle className="form">
            <input type="text" name="name" value={props.initialValue.name} onChange={props.change} placeholder="Jannet Riverbottm"/>
            <input type="text" name="role" value={props.initialValue.role} onChange={props.change} placeholder="Junior Developer"/>
            <input type="text" name="bio" value={props.initialValue.bio} onChange={props.change} placeholder="Lorem Ipsum dores met"/>
            <input type="text" name="img" value={props.initialValue.img} onChange={props.change} placeholder="www.unsplash.com/womans"/>
            <button onClick={props.onSubmit}>Submit</button>
        </Formstyle>
    )
}
export default Inputs

const Formstyle = styled.form`
display: none;

`