import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'

export function Header() {
    return (
        <div className={s.container}>
            <div className={s.links}>
                <div className={s.link}><NavLink className={({isActive}) => isActive ? s.active : ''}
                                                 to={PATH.PRE_JUNIOR}>pre-junior</NavLink></div>
                <div className={s.link}><NavLink className={({isActive}) => isActive ? s.active : ''}
                                                 to={PATH.JUNIOR}>junior</NavLink></div>
                <div className={s.link}><NavLink className={({isActive}) => isActive ? s.active : ''}
                                                 to={PATH.JUNIOR_PLUS}>junior+</NavLink></div>
                <div className={s.link}>Hover me!</div>
            </div>
        </div>
    )
}

