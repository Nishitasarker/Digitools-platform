import { DiVim } from "react-icons/di"
import { BsCart2 } from "react-icons/bs";
import { toast } from "react-toastify";


const Cart = ({Carts,setCarts}) => {

    const totalPrice = Carts.reduce((sum,item) => sum+ item.price,0)
   const handleFinish = () =>{
    setCarts([])
    toast.success("Payment Successfull")
   };

   const handleRemove = (items)=>{
     const filterArray = Carts.filter(C=>C.id !== items.id)
     setCarts(filterArray)
     toast.success("Item Removed")
   }
 console.log(Carts)
        return (
        <div className="border-2 border-gray-100 mx-0 md:mx-25 mb-10">
            {/* name of each tab group should be unique */}
             <h1 className="font-bold text-2xl px-5">Your Cart</h1>
        
          {Carts && Carts.length > 0 ? (
            <>
            {Carts.map((item, name) => 
          
         <div className="bg-white pb-2 px-5 pt-1">
             <div>
            <div className="py-1 flex justify-between w-full px-3  border-1 border-gray-100 bg-gray-100" key={name}>
             <div className="flex gap-5 ">
                <div className="w-12 h-12 rounded-full  border-2 border-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={item.icon} className="w-8 h-8 object-contain" alt="" />
                </div>

                <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-500">${item.price}</p>
                </div>
            </div>
 
          <button onClick={()=>handleRemove(item)} className="text-red-500 font-bold">Remove</button>
            </div>
            </div>
            </div>
           
          )}
        <div className="flex justify-between px-5 py-1">
                <p className="text-gray-500 my-2">Total:</p>
                  <p>${totalPrice}</p>
            </div>

           <div className="px-5">
            <button onClick={handleFinish} className=" w-full bg-gradient-to-r from-[#4F39F6] to-[#a327d8] text-white text-lg  font-semibold rounded-4xl px-5 py-1">Proceed To Checkout</button>
            </div>           
 </>)
         : ( <div className="text-gray-500 bg-gray-100 py-15  my-2 mx-5 flex flex-col items-center">
                    <BsCart2 className="h-12 w-12" />
                <p>Your Cart is empty</p>
         </div>
           
        )
         }
         
        </div>
    )
};
;

export default Cart;