import React from 'react'
import momoscircle from '../assets/images/momos.jpg'
import chipscircle from '../assets/images/fried chips.jpg'
import shrimpscircle from '../assets/images/fried shrimps.jpg'
import shawarmacircle from '../assets/images/shawarma.jpg'
import loadedcircle from '../assets/images/Loaded fries.jpg'
import zingercircle from '../assets/images/zinger burger.jpg'
import popscircle from '../assets/images/chicken pops.jpg'
import wrapcircle from '../assets/images/chicken wrap.jpg'
import vegcircle from '../assets/images/veg burger.jpg'
import tacocircle from '../assets/images/tacos.jpg'
import alfahamcircle from '../assets/images/alfaham.webp'
import drinkscircle from '../assets/images/cool drinks.jpg'
import burgercircle from '../assets/images/chicken burger.jpg'
import friescircle from '../assets/images/french fries.jpg'
import pizzacircle from '../assets/images/pizza.jpg'
import nuggetscircle from '../assets/images/nuggets.jpg'

import ProductCard from '../component/ProductCard'
function Products() {
    const products = [
     { id: 1, image: momoscircle, name: "Momos", price: 110, qty: 1 },
  { id: 2, image: chipscircle, name: "Fried Chips", price: 100, qty: 1 },
  { id: 3, image: shrimpscircle, name: "Fried Shrimps", price: 140, qty: 1 },
  { id: 4, image: shawarmacircle, name: "Shawarma", price: 120, qty: 1 },
  { id: 5, image: loadedcircle, name: "Loaded Fries", price: 140, qty: 1 },
  { id: 6, image: wrapcircle, name: "Chicken Wrap", price: 110, qty: 1 },
  { id: 7, image: zingercircle, name: "Zinger Burger", price: 130, qty: 1 },
  { id: 8, image: popscircle, name: "Chicken Pops", price: 120, qty: 1 },
  { id: 9, image: vegcircle, name: "Veg Burger", price: 135, qty: 1 },
  { id: 10, image: tacocircle, name: "Tacos", price: 124, qty: 1 },
  { id: 11, image: alfahamcircle, name: "Alfaham", price: 120, qty: 1 },
  { id: 12, image: drinkscircle, name: "Pepsi", price: 90, qty: 1 },
  { id: 13, image: burgercircle, name: "Chicken Burger", price: 40, qty: 1 },
  { id: 14, image: friescircle, name: "French Fries", price: 70, qty: 1 },
  { id: 15, image: pizzacircle, name: "Pizza", price: 145, qty: 1 },
  { id: 16, image: nuggetscircle, name: "Chicken Nuggets", price: 118, qty: 1 },
  
    ]
  return (
      <div className="py-2 px-4">
      <h2 className="text-4xl font-bold text-[#57534e] mb-4">Food Items:</h2>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2">Image</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products
