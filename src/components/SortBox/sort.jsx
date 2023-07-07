import React from 'react'
import './sort.css'

export const Sort = () => {
  return (
    <div className="sort__box">
        <span className="txt__sort">SORT BY</span>
        <div className="item__sort">
            <select name="" id="" className="select__sort">
                <option className="option__sort" value="defualt">defualt</option>
                <option className="option__sort" value="new">new</option>
                <option className="option__sort" value="favorite">favorite</option>
            </select>
        </div>
    </div>
  )
}
