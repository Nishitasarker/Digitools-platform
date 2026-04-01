import { DiVim } from "react-icons/di"


const Cart = ({Carts}) => {
    console.log(Carts)
 console.log(Carts)
        return (
        <div>
            {/* name of each tab group should be unique */}
             <h1 className="font-bold text-2xl px-25">Your Cart</h1>
        
          {Carts && Carts.length > 0 ? (
             Carts.map((item, name) => 
          
         <div className="bg-white pb-2 px-25 pt-1">
             <div>
            <div className="py-1 flex justify-between px-3  border-1 border-gray-100 bg-gray-100" key={name}>
             <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full  border-2 border-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={item.icon} className="w-8 h-8 object-contain" alt="" />
                </div>

                <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-500">${item.price}</p>
                </div>
            </div>
 
          <button className="text-red-500 font-bold">Remove</button>
            </div>
            </div>

           
            </div>
          ))
         : ( 
            <p>Your Cart is empty</p>
        )
         }
         
        </div>
    )
};
;

export default Cart;