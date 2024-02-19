/* eslint-disable react/prop-types */
import Products from '../components/Products';
import data from '../assets/data.json';

const Shop = ({ handleAddToCart }) => {
    const product = data.productinfo;
    // console.log(product);

    return (
        <div className="shop bg-indigo-300">
            <div className='parent-div flex flex-wrap gap-6 pt-9 p-[100px] '>
                {product.map(i => <Products {...i} key={i.id} handleAddToCart={handleAddToCart}/>)}
            </div>
        </div> 
    ); 
};

export default Shop;
