import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00'
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            <hr/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1
