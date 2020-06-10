import React, { useState } from 'react'
import './CardMoreDetail.css'

const CardMoreDetail = ({ value, label, type="", detail, copies }) => {
    const [ toggle, setToggle ] = useState(false)

    const openMore = () => {
        setToggle(!toggle)
    }

    return (
        <div className={`card-more-detail ${type}`} onClick={openMore}>
            <span className="card-more-detail_value">
                {value}
            </span>
            {label && (
                <span className="card-promo">
                    {label}
                </span>
            )}
            {detail && (
                <span className="card-desc">
                    {detail}
                </span>
            )}
            {(toggle && copies.length > 0) && (
                <div className="more-copy">
                    {copies.map((copy, idx) => (
                        <p key={idx} className="small">
                            {copy}
                        </p>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CardMoreDetail