'use client'

import { redirect, usePathname } from "next/navigation";
import React, { createContext, useEffect, useReducer } from "react";

export const ResponseContext = createContext(false);

export const loginReducer = (state: { login: any; }, action: { type: any; payload: any; }) => {
  switch(action.type) {
    case 'SET_LOGIN':
      return state = action.payload;
    default:
      return state;
  }
}

export default function Header({ children }: { children: React.ReactNode}) {

  const [login, dispatch] = useReducer(loginReducer, false);
  const pathName = usePathname();

  useEffect(() => {
    /* const getResponse = async () => {
      const response = await fetch('http://localhost:3000/tasks')
      const dataResponse = await response.json();
      setTasks(dataResponse);
    }
    getResponse(); */
    console.log(localStorage.getItem('login'))
    console.log(pathName)
    if (localStorage.getItem('login') === 'true' && pathName === '/') {
      console.log('to dashboard', login);
      redirect('/dashboard');
    }
    if (localStorage.getItem('login') === 'false' && pathName === '/dashboard') {
      console.log('to login', login);
      redirect('/login');
    }
    if (localStorage.getItem('login') === 'true' && pathName === '/login') {
      console.log('to dashboard', login);
      redirect('/dashboard');
    }
  }, [login, pathName])

  const loginHandler = async () => {
    localStorage.setItem('login', 'true')
    dispatch({ type: 'SET_LOGIN', payload: true })
  }

  const logoutHandler = async () => {
    localStorage.setItem('login', 'false')
    dispatch({ type: 'SET_LOGIN', payload: false })
  }

  return (
    <>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
      <ResponseContext.Provider value={{ login }}>
        {children}
      </ResponseContext.Provider>
    </>
  )
}