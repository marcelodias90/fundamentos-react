import React, { cloneElement } from "react";

export default(props) => {
    return(
        <di>
            {props.children.map((child, i) => {
                return cloneElement(child, {...props, key: i })
            })}
        </di>
    )
}