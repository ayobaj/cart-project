/* eslint-disable react/prop-types */

const Products = ({name, price, image, id, handleAddToCart}) => {

    return (
    <div className='productinfo  flex flex-col items-center border-none w-[190px] font-medium rounded-[10px]'>
        <img className='w-[190px] h-[210px] rounded-[10px]' src={image} alt={name}/>
        <h2>{name}</h2>
        <h3>{`$${price}`}</h3>
        <button className='border-none p-[10px] w-[190px] bg-indigo-500 hover:bg-indigo-700 rounded-[10px] font-medium text-white' onClick={() => handleAddToCart(id)}>Add to cart</button>
    </div>
    )
} 

export default Products
