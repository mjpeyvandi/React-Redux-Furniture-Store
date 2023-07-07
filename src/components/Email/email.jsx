import React from 'react'
import './email.css'

export const Email = () => {
  return (
    <div className="box__subscribe">
        <div className="container">
            <div className="subscribe__content">
                <div className="subscribe__content__left">
                    <h1 className="titr__join">Join Our Newsletter</h1>
                    <p className="desc__sub">
                        Subscribe taday for free and save 10% <br/>
                        on your first purchase.
                    </p>
                </div>
                <div className="subscribe__content__right">
                    <input type="email" placeholder="Your email" className="input__email"/>
                    <div className="box__btn__sub">
                        <button className="btn__sub">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
