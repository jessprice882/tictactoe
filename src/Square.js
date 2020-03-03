import React from 'react';
import './index.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SquareButton = withStyles({

    root: {
        fontFamily: 'Rockwell',
        borderRadius: '0',
        background: '#420fc5',
        '&:hover': {background: '#21CBF3',},
        border: '1px',
        borderStyle: 'solid',
        borderColor: 'black',
        color: 'white',
        height: '100px',
        width: '100px',
        fontSize: '3em',
        margin: '5px',
    },
    disabled: {
        borderRadius: '0',
        background: 'white',
        borderStyle: 'solid',
        border: '1px',
        borderColor: 'black',
        height: '100px',
        width: '100px',
        fontSize: '3em',
        color: 'black',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

function Square(props){
    return (

        <SquareButton disabled={props.disabled} onClick = {props.onClick}>
            {props.value}
        </SquareButton>

    )
}

export default Square;
