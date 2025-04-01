"use client"
import  { createContext, useState } from 'react';


    export const MyContext = createContext();


    export const Provider = ({ children }) => {
      const [userRole, setUserRole] = useState(-1);
      const updateRole = (newData) => {
        setUserRole(newData);
      };
   
      const value = {
        userRole,
        updateRole
      };


      return (
        <MyContext.Provider value={value}>
          {children}
        </MyContext.Provider>
      );
    };
