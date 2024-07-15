import React from 'react'

const ButtonList = () => {
    const buttonList =["All","Music","Mixes", "Indian pop music","Javascript","Jukebox","Coding","Java"]
        

        
    
  return (
    <div>
       
            {
               buttonList.map((item,index)=>{
                return(
                    <button  key={index} className='bg-gray-200 rounded-lg px-4 py-1 mx-2 font-medium'> {item}</button>
                )
               }) 
            }
        
       
    </div>
  )
}

export default ButtonList