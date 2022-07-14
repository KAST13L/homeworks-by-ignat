import React, {useState} from 'react'
import {CheckAdultUsersAC, homeWorkReducer, SortDownUsersAC, SortUpUsersAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortUpUsersAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortDownUsersAC()))
    const checkAdult = () => setPeople(homeWorkReducer(initialPeople, CheckAdultUsersAC()))


    const finalPeople = people.map((p) => {
        return <div style={{display: 'flex', width: '200px', justifyContent: 'space-between'}} key={p._id}>
            <span>
                {p.name}
            </span>
                <span>
                {p.age}
            </span>
            </div>
    })


    return (
        <div>
            <hr/>
            homeworks 8

            <div style={{padding: '15px'}}>
                {finalPeople}
            </div>
            <div style={{padding: '15px'}}>
                <span><SuperButton onClick={sortUp}>sort up</SuperButton></span>
                <span><SuperButton onClick={sortDown}>sort down</SuperButton></span>
                <span><SuperButton onClick={checkAdult}>check 18</SuperButton></span>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
