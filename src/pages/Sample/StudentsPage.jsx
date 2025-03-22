import React from 'react'
import Bg from "../Sample/images/pattern.png"
 
export default function StudentsPage(){
    
    return(
        <>
            <div className="bg-no-repeat min-h-screen w-full flex justify-center" style={{backgroundImage: `url(${Bg})`}}>
            </div>
        </>
    )
}