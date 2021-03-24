import moment from 'moment';
import React from 'react';
import { useSelector } from "react-redux"
import { formatDate } from './helper';
import './User.css'

export const User = () => {
    try { //обход ошибки рендеринга при info = undefind, 
        //так же можно было обойтись тернарниками
        //или сделать через состояние, но я считаю так более канонично
        const {info} = useSelector(store => store.userInfo) 
    
        return (
            <div className="user">
                <div className="avatar">
                    {/* 
                        далее завязался на нулевой элемент (info[0]) 
                        так как сказали что информация будет приходить всегда
                        только по одному пользователю
                    */}
                    <img src={info[0].avatar} /> 
                </div>
                <div className="info">
                    <h4>{info[0].name}</h4>
                    <p><b>Birthday:</b> {moment(info[0].birthdate * 1000).format("DD.MM.YYYY")} </p>
                    <p><b>City:</b> {info[0].city}</p>
                    <p><b>Education:</b> {info[0].education}</p>
                    <p><b>Created:</b> {formatDate(new Date(info[0].createdAt))}</p>
                </div>
            </div>
        )

    } catch (e) {
        //console.error(e) для отлова ошибок, раскомментить если компонент не рендерится
        return null
    }
}



