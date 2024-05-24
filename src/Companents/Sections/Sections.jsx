import React, { useEffect, useState } from 'react'
import style from '../Sections/Sections.module.css'
import axios from 'axios'

const Sections = () => {
    const [data, setData] = useState([]);
    console.log(data);
    const getData = () => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {
                setData(res.data);

            })
    };
    useEffect(() => {
        getData();


    }, [])


const addToCard = (item) => {
    axios.post(``)
}


    return (
        <div className={style.mode}>
            <div className={style.classic}>
                <div className={style.texe}>
                    <h1>Our Products</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</span>
                </div>
                <div className={style.styl}>
                {data.map((item) => (
                    <div key={item.id} className={style.robortCard}> 
                    <img src={item.image}  alt="" />
                    <h2></h2>
                     <marquee behavior="" direction="">{item.title}</marquee>
                    <p>{item.category}</p>
                    <p>${item.price}</p>
                    <button onClick={() => addToCard(item)}>add to cart</button>
                    
                      </div>
                ))}
                </div>
                
            </div>
        </div>
    )
                }
export default Sections
