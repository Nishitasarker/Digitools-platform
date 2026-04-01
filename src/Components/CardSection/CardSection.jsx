import React, { use }  from 'react';
import CardJSON from "./CardJSON";


const CardSection = ({modelPromise, Carts, setCarts}) => {
     const CardsData = use(modelPromise)
        

        const handleAddToCart = (product) => {
       
        setCarts([...Carts, product]);
    };
    return (
        <>
       
     
     
      
       <div className=' pb-10 grid grid-cols-1 justify-items-center  gap-5 md:grid-cols-3 px-10'>
     {CardsData && CardsData.map((allCard)=>

        <CardJSON key={allCard.name} allCard={allCard} Carts={Carts} 
                    setCarts={setCarts} setIsBuy={() => handleAddToCart(allCard)}></CardJSON>

     )}
      

       </div>


        </>
    );
};

export default CardSection;