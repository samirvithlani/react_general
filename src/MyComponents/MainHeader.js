import React from 'react'
import { Link } from 'react-router-dom'

export const MainHeader = () => {
    return (
        <div>
            <nav>
                <h1>HEADER</h1>
                <ul>

                    <li>
                        <Link to="/welcome">Welcome</Link>
                    </li>
                    <li>
                        <Link to="/product">PRODUCT</Link>
                    </li>

                    <li>
                        <Link to="/product-detail">PRODUCT-DETAIL</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
