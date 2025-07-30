import React, { useState,createContext,useContext  } from 'react'
    const UseContext = createContext({
        value:'',
        setValue:(val:string)=>{}
    })

const RootComp = () => {
    const [value,setValue] = useState('')

  return (
    <UseContext.Provider value={{
        value:'Hello klwdmfklnwjlwfnejfk',
        setValue:(val:string)=>{setValue(val)}
    }} >
       <ChildComp/>
    </UseContext.Provider>
  )
}

export default RootComp


const ChildComp = ()=>{
    const {value} =useContext(UseContext)
    return <h2>{value}</h2>
}

