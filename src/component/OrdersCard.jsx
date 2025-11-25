import React from 'react'

function OrdersCard(props) {
  return (
    <tr>
        <td className='items-center text-center text-3xl'><i class='bxr  bx-user'></i> </td>
      <td className=" border-gray-300 p-2">
        <img className="w-20 i" src={props.product.image} alt="" />
      </td>
      <td className="border border-gray-300 text-center p-2">{props.product.name}</td>
      <td className="border border-gray-300 text-center p-2">{props.product.qty}</td>
      
      <td className="border border-gray-300 p-2 text-center">₹{props.product.price}</td>
      <td className="border border-gray-300 p-2 flex gap-2 justify-center">
        <button className=" text-[#57534e] px-3 py-1 w-10 h-10 rounded text-lg  hover:text-[#ef4444]"><i class='bxr  bx-check'></i>  </button>
        <button className="text-[#57534e] px-3 py-1 rounded text-lg hover:text-[#ef4444]"><i class='bxr  bx-x'></i>  </button>
      </td>
    </tr>
  );
}

export default OrdersCard
