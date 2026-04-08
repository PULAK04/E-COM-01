import Cart from "../models/Cart.js"

export const addToCart=async(req,res)=>{
    try {
        const {userId,productId}=req.body;

        let cart=await Cart.findOne({userId});

        if(!cart){
            cart =new Cart({userId,items:[{productId,quantity:1}]})
        }else{
            let item=cart.items.find((i)=>i.productId.toString()===productId);

            if(item){
                item.quantity+=1;
            }else{
                cart.items.push({productId,quantity:1})
            }
        }


        await cart.save();

        res.json({
            message:"Item added to cart",
            cart
        })
    } catch (error) {
        res.status(500).json({message:"server error",error})
    }
}