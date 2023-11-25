import React from 'react'
import classes from './header.module.css'
import { Link } from 'react-router-dom';
export default function Header() {
    const user={
        name:'John',
    };
    const cart={
        totalcount:10,
    };
    const logout=() =>{}    
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to="/" className={classes.logo}>
                    FOOD MINE!
                </Link>
                <nav>
                    <ul>
                        {
                            user?(
                            <li className={classes.menucontainer}>
                                <Link to="/profile">{user.name}</Link>
                                <div className={classes.menu}>
                                    <Link to ="/profile">Profile</Link>
                                    <Link to="/orders">Orders</Link>
                                    <a onClick={logout}>LogOut</a>
                                </div>
                            </li>
                            )
                            :
                            (<Link to="/login">Login</Link>)
                        }

                        <li>
                            <Link to="/cart">
                                Cart{
                                    cart.totalcount>0 && <span className={classes.cart_count}>{cart.totalcount}</span>
                                }
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
 
}
