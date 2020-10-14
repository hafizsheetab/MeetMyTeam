import React from 'react'

export const Scroll = (props) =>{
    return(
        <div className = 'overflow-y-auto '>
            {props.children}
        </div>
    );

}

export default Scroll;