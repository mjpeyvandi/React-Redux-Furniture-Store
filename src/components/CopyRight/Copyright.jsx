import React from 'react'
import './copyright.css'
import { AiFillTwitterCircle,
    AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaTelegram } from 'react-icons/fa'

export const Copyright = () => {
  return (
    <div className="box__copyRight">
        <div className="container">
            <div className="box__content__finaly">
                <p className="txt__copyRight">
                    Copyright © 2017 Stile. by Selectlayars Inc. All Rights
                    Reserved.| Powered by
                     BigCommerce
                </p>
                <div className="team__social">
                    <span className="txt__social">Get Social</span>
                    <AiFillTwitterCircle className='icon'/>
                    <BsFacebook className='icon'/>
                    <AiFillInstagram className='icon'/>
                    <FaTelegram className='icon'/>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
