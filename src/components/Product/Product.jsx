import React, { useState, useEffect } from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../Redux/Slice'
import { useDispatch } from 'react-redux'
import { FaStar,
        FaStarHalfAlt } from 'react-icons/fa'


export const Product = () => {
    
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState([]);
    const [checkFind, setcheckFind] = useState(false);


    const { id } = useParams();

    useEffect(()=>{

        fetch('http://localhost:8000/products/'+id)
        .then((res)=>{
            return res.json();
        }).then((resp)=>{
            setData(resp)
            setcheckFind(true)
        }).catch((erorr)=>{
            console.log(erorr.message)
        })

    }, [id])

    
    
    const dispatch = useDispatch()

    const addQuantity = () => {
        setQuantity(quantity + 1);
    }
      
    const minQuantity = () => {
        if(quantity > 1){
          setQuantity(quantity - 1);
        }
    }

  return (
    <div>
        { checkFind ?
            <div className="product">
                <img src={data.img} alt="image product" className="image__product" />
                <div className="info__product">
                    <h2 className="name__product">{data.name}</h2>
                    <h4 className="price__product">{'$ '+ data.price}</h4>
                    <div className="stars">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStarHalfAlt/>
                    </div>
                    <p className="desc__product">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Provident, itaque quos necessitatibus atque eum tempore vel? Quisquam itaque,
                     quibusdam praesentium nostrum harum vero rerum expedita!
                      Consequatur officiis asperiores corrupti molestias!</p>

                    <div className="buttons">
                        <div className="quantity__box">
                            <p className='text__quantity'>Quantity</p>
                            <button className="btn__quantity" style={{width:'2rem'}}
                            onClick={()=> minQuantity()}
                            >-</button>
                            <span>{quantity}</span>
                            <button className="btn__quantity" style={{width:'2rem'}}
                             onClick={()=> addQuantity()}   
                            >+</button>
                        </div>
                        <button className='btn__add'
                        onClick={()=> dispatch(addToCart({
                            id: data.id,
                            name: data.name,
                            price: data.price,
                            img: data.img,
                            quantity: quantity,
                            category: data.category
                        }))}
                        >add to cart</button>
                    </div>

                </div>
            </div>
        : null}
    </div>
  )
}
