import React, { use }  from 'react';
import CardJSON from "./CardJSON";
import { toast } from 'react-toastify';


const CardSection = ({modelPromise, Carts, setCarts}) => {
     const CardsData = use(modelPromise)
        

        const handleAddToCart = (product) => {
       
            const isFound = Carts.find(item=>item.id=== product.id)
            if(isFound ){
                toast.error("Item already in Cart!")
                return;
            }

        else{
            setCarts([...Carts, product]);
        toast.success("Item added to cart!")

        }    };
    return (
        <>
       
     
     
      
       <div className=' pb-10 grid grid-cols-1 justify-items-center  gap-5 sm:grid-cols-2 md:grid-cols-3 px-10'>
     {CardsData && CardsData.map((allCard)=>

        <CardJSON key={allCard.name} allCard={allCard} Carts={Carts} 
                    setCarts={setCarts} setIsBuy={() => handleAddToCart(allCard)}></CardJSON>

     )}
      

       </div>


        </>
    );
};

export default CardSection;