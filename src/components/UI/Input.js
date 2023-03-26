import React from 'react'
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
        return (
            <div className={classes.input}>
                <label htmlFor={props.input.id}> {props.label} </label>
                {/* Using spread operator here. Ensures all the key-value pair of the props are added as attributes to the input */}
                <input ref={ref} {...props.input} />
            </div>
        )
    }
)

export default Input;