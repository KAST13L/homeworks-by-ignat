import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // +
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void // +
    addUser: () => void //+
    error: string // +
    totalUsers: number // +
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass // +
    const buttonClass = name === '' ? s.error : s.someClass

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button className={buttonClass} onClick={addUser}>add</button>
            <span> number of users: {totalUsers}!</span>
            <div><span>{error}</span></div>
        </div>
    )
}

export default Greeting
