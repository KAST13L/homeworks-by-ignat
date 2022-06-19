import React from 'react'
import s from './Affairs.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // ЗДЕСЯ
    deleteAffairCallback: ( _id: number) => void
}

function Affair(props: AffairPropsType) {

    return (
        <div className={s.text}>
            <div className={s.name}>{props.affair.name}</div>
            <div className={s.priority}> {props.affair.priority} </div>
            <div className={s.button}><button onClick={() => {props.deleteAffairCallback(props.affair._id)}}>X</button></div>
        </div>
    )
}

export default Affair
