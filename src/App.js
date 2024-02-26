import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserActions} from "./store/User/actions/userGetActions";

const App = () => {
    const user = useSelector((state) => state.userReducer.users.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserActions)
    },[])
    console.log(user)
    return (
        <div style={{display: 'flex'}}>
            {
                user?.map((item) => (
                    <div style={{border: '2px solid black', width: '200px'}} className='card'>
                        <h2>{item.first_name}</h2>
                        <img src={item.avatar} alt=""/>
                        <span>{item.email}</span>
                    </div>
                ))
            }
        </div>
    );
};

export default App;