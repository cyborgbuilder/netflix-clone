import React, { useState, useEffect} from 'react'
import './Nav.css'
function Nav() {

    const [show, handleShow] = useState(false);

    const trasnitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        }else {
            handleShow(false);
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", trasnitionNavBar);
        return () => window.removeEventListener("scroll", trasnitionNavBar)
    }, [])


  return (
    <div className={`nav ${show && "nav_black"}` }>
        <div className='nav_contents'>
            <img 
            src='https://cloudfront-us-east-1.images.arcpublishing.com/gray/3HCWZMP7PFGY3OJJPFHIX5O2VI.png' 
            className='nav_logo'
            />

            <img 
            src='https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg'  
            className='nav_avatar'
            />
        </div>
    </div>
  )
}

export default Nav