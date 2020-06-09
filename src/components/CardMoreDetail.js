import React, { useState } from 'react'

const CardMoreDetail = ({ copy }) => {
    const [ toggle, setToggle ] = useState(false)

    const openMore = () => {
        console.log('test')
        setToggle(!toggle)
    }

    return (
        <div>
            <span className="small link-color" onClick={openMore}>See more details</span>
            {toggle && <p className="small">{copy}</p>}
        </div>
    )
}

export default CardMoreDetail