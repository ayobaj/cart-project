/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'


const Cart = ({ cart, setCart, handleChange }) => {

// function for adding price

    const [price, setPrice] = useState(0);

    const handlePrice = () =>{
        let result = 0;
        cart.forEach((item) => {
            result += item.count * item.price;
    })

        setPrice(result);
    };

    //  function for deleting a product in the cart page

    const handleDelete = (id) => {
        const arr = cart.filter((item) => item.id !==id);
        setCart(arr);
    }


    useEffect(()=> {
        handlePrice();
    })

    return (
    <div className="cart bg-indigo-300 min-h-screen">
        {cart.map((item) => (
            <div key={item.id} className="flex items-center mb-3 pt-8 gap-5 justify-center">
                <img src={item.image} className="w-[50px] h-[60px]"/>
                <h2>{item.name}</h2>
                <span className="flex gap-3">
                <button onClick={()=> handleChange(item, +1)} className="border-none p-4 rounded-xl mb-1  bg-indigo-400 hover:bg-green-400">+</button>
                <button className='border-none bg-indigo-400 p-4 rounded-xl'>{item.count}</button>
                <button onClick={()=> handleChange(item, -1)} className="border-none p-4 rounded-xl bg-indigo-400 bg hover:bg-red-600">-</button>
                </span>
                <h3 className='border-none p-4 rounded-xl bg-indigo-400'>{`$ ${item.price}`}</h3>
                <button className='border-none bg-red-700 text-white p-4 rounded-2xl hover:bg-red-900' onClick={()=> handleDelete(item.id)}>delete</button>
            </div>
        ))}
        {/* had to change the amount and price from jason to an integer to be able to get the calculation  */}
        <div className='ml-6'>
            <span className='font-medium '>TOTAL: </span>
            <span className='font-medium'>{`$ ${price}`}</span>
        </div>
    </div>
    ) 
}

export default Cart
