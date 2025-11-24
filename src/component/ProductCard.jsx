function ProductCard({ product }) {
  return (
    <tr>
      <td className="border  items-center border-gray-300 p-2">
        <img className="w-20" src={product.image} alt="" />
      </td>
      <td className="border border-gray-300 text-center p-2">{product.name}</td>
      
      <td className="border border-gray-300 p-2 text-center">₹{product.price}</td>
      <td className="border border-gray-300 p-2 flex gap-2 justify-center">
        <button className=" text-[#57534e] px-3 py-1 w-10 h-10 rounded text-lg  hover:text-[#ef4444]"><i class='bxr  bx-edit-alt'></i> </button>
        <button className="text-[#57534e] px-3 py-1 rounded text-lg hover:text-[#ef4444]"><i class='bxr  bx-trash'></i> </button>
      </td>
    </tr>
  );
}

export default ProductCard;
