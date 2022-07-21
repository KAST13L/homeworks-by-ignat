import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<string>()
    const [show, setShow] = useState<boolean>(false)


    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date().toLocaleTimeString())
        }, 500)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)

    }

    const stringTime = date // fix with date
    const stringDate = new Date().toLocaleDateString() // fix with date

    const divStyle = {
        height: '20px',
        border: '1px solid black',
        borderRadius: '10px 0',
        margin: '5px',
        width: '130px',
        padding:'5px'
    }

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div style={divStyle}>
                Time: {stringTime}
            </div>
            <div style={divStyle}>
                <div>
                    Date: {show && stringDate}
                </div>
            </div>
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>
        </div>
    )
}

export default Clock
