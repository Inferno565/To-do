import React from 'react'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor:'#021526'}}>
            <a className="navbar-brand" style={{ color: 'white' }}>{props.title}</a>
        </nav>
    )
}
