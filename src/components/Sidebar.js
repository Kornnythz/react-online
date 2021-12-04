import React, { useState , useEffect } from 'react'

const Sidebar = () => {
    
    let [fullName , setFullname] = useState('John')
    const [isShow , setIsShow] = useState(true)

    const changeName = () => {
        setFullname('Marry')
        setIsShow(false)
    }

    useEffect(()=>{
        console.log("sidebar useEffect")
    })

    useEffect(()=>{
        console.log("sidebar useEffect one time only")
    },[])

    useEffect(()=>{
        console.log("sidebar useEffect fullname")
    },[fullName])

    return (
        <>
            <p>สวัสดี {fullName}</p>
                {
                    isShow === true ? (
                        <p>Hello</p>
                    ) : (
                        <p>World</p>
                    )
                }
            <button onClick={changeName}>Change Name</button>
        </>
    )
}

export default Sidebar;
