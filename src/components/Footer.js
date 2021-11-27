import React from 'react'
import PropTypes from 'prop-types'
const Footer = ({title , website , address , postcode, status}) => {
    // const {title , website , address , postcode} = props;
    const nickName = "Korn";

    return (
        <div>
            {/* <h1>Vatcharakon Kalapakdee {nickName}</h1> */}
            <h3 style={style.title}>{title} &copy; {new Date().getFullYear()}</h3>
            <p style={{color:'green', fontSize: 18}}>{website} {address} {postcode} {status.toString()}</p>
            <p style={style.title}>Vatcharakon</p>
        </div>
    )
}

const style = {
    title :  {
        color:'red'
    }
}

Footer.propTypes = {
    title: PropTypes.string,
    website: PropTypes.string,
    address: PropTypes.string,
    postcode: PropTypes.number,
    status: PropTypes.bool
}

export default Footer;
