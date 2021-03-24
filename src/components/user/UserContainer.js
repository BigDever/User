import React, { useEffect, useState } from 'react';
import  { useDispatch, useSelector }  from 'react-redux';
import { setUserInfoAction } from '../../reducers/actions';
import { User } from './User';
import { getInfoAPI } from './UserApi';
import './UserContainer.css'

const UserContainer = () => {
  const [userInfo, setUserInfo] = useState(null);
  const dispatch = useDispatch()

  const fetchUserInfo = async () => {
    try {
      const info = await getInfoAPI();
      const infoJson = await info.json();
      console.log(infoJson);
      setUserInfo(infoJson);
    }
    catch (e) {
      console.log(e)
    }
  }
  
  useEffect(() => {
    fetchUserInfo();
  }, [])

  useEffect(() => {
    if (userInfo) {
      dispatch(setUserInfoAction(userInfo))
    }
  }, [userInfo])

  return <div className="user-block">
    <User />
  </div>
}


export default UserContainer;