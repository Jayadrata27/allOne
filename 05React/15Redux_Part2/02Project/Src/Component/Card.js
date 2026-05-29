import { useState } from "react";
import FoodCart from "./FoodCart";

const foodItems = [
  { id: 1, food: "Pizza", price: 250 },
  { id: 2, food: "Burger", price: 120 },
  { id: 3, food: "Pasta", price: 180 },
  { id: 4, food: "Biryani", price: 220 },
  { id: 5, food: "Sandwich", price: 90 },
  { id: 6, food: "Momos", price: 80 },
  { id: 7, food: "Dosa", price: 100 },
  { id: 8, food: "Paneer Tikka", price: 200 },
  { id: 9, food: "Fried Rice", price: 150 },
  { id: 10, food: "Ice Cream", price: 70 }
];


function Card(){


    return(
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"20px"}}>
           {foodItems.map((value)=>{
               return(
                 <div key={value.id}>
                     <FoodCart value={value} />
                 </div>
               )
           })}
        </div>
    )
}
export default Card;