import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <Link to="/" className="navbar-brand">
                            <div >Employee Mangement App</div>
                            </Link>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
