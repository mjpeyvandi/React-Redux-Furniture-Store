import React from 'react'
import './view.css'
import {FaListUl} from 'react-icons/fa'
import {BsFillBox2Fill} from 'react-icons/bs'

export const View = (props) => {
  return (
    <div className="view__box">
        <span className="txt__view">VIEW</span>
        <FaListUl className='icon' onClick={props.listViewItem}/>
        <BsFillBox2Fill className='icon' onClick={props.boxViewItem}/>
    </div>
  )
}
