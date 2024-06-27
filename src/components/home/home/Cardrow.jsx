import React from 'react'
import Card from './Card'

const data = [
{   image : "https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/armchair.jpg",
    name: "Armchair",
    title : "Armchair with Head Rester",
    price : "£62.50",
},
{
    image : "https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/sofa.jpg",
    name: "Sofa",
    title : "Beige Living Room Sofa",
    price : " £599.00",
},
{
    image : "https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/table.jpg",
    name: "Stool, Table",
    title : "Classic Wooden Table",
    price : " £85.00",
},
{
    image : "https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2017/12/office-table.jpg",
    name: "Computer table, Table",
    title : "Computer Table with Office Chair",
    price : "£62.50",
},
{
    image : "https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/desk-table.jpg",
    name: "Study table, Table",
    title : "Corner Study Table with Chair",
    price : "£459.00",
},
{
    image : "https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/study-table.jpg",
    name: "Armchair",
    title : "Desktop Table with Drawers",
    price : "£529.00",
},
{
    image : "https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/dining-table.jpg",
    name: "Armchair",
    title : "Dinning Table for Two",
    price : "£360.00",
},
{
    image : "https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/fancy-chairs-600x600.jpg",
    name: "Sofa, Two Seaters",
    title : "Fancy Chairs",
    price : "£380.50",
},
{
    image : "https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/round-sofa.jpg",
    name: "Sofa, Two Seaters",
    title : "Modern White Round Sofa",
    price : "£599.00",
},
{
    image : "https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2017/11/chair.jpg",
    name: "Chair, Stool",
    title : "Fancy Single Chair",
    price : "£199.00",
},
{
    image : "https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/pic53-free-img.jpg",
    name: "Chair, Recliner",
    title : "Fancy Single Chair",
    price : "£419.00",
},
{
    image : "https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/round-stool.jpg",
    name: "Chair, Stool",
    title : "Round Short Leg Stool/Chair",
    price : "£229.00",
},

]



function Cardrow() {
  return (
    <div className='grid grid-cols-4 '>
        {data.map((value)=> {
            return <Card image={value.image} name={value.name} title={value.title} price={value.price}/>
        })}
    </div>
  )
}

export default Cardrow