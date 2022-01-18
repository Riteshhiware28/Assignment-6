import React from 'react'
import './ListTwo.css'

function ListTwo(props) {
    const {image,title}= props;
    return (
        <div className='listTwo' alt="">
            <img src={image} alt=""/>
            <p>{title}</p>
        </div>
    )
}

export default ListTwo
