import React from 'react'
import './titr.css'

export const Titr = () => {
  return (
    <div className='titr__main'>
        <div className="container">
            <div className="titr__main__content">
                <h2 className="titr__page">New Arivals</h2>
                <div className="list__page__container">
                    <ul className="list__page">
                        <i className="list__page__items">Home</i>
                        <span className="item__spliter">/</span>
                        <i className="list__page__items">Collection</i>
                        <span className="item__spliter">/</span>
                        <i className="list__page__items">New Arivals</i>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
