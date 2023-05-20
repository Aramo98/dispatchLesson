import image1 from "./apples-on-a-tree-branch.webp"
import image2 from "./pears-28f8900.jpg"
import image3 from "./whole-and-slices-watermelon.webp"
export  const fruitsData = [
    {
     id: 1,
     fruitName: "Apple",
     fruitPrice: 850,
     fruitImage: image1,
     fruitCode: Math.floor(30000 * Math.random() * 30000)
    },
    {
        id: 2,
        fruitName: "Pear",
        fruitPrice: 750,
        fruitImage: image2,
        fruitCode: Math.floor(30000 * Math.random() * 30000)
       },
       {
        id: 3,
        fruitName: "Wathermelon",
        fruitPrice: 650,
        fruitImage: image3,
        fruitCode: Math.floor(30000 * Math.random() * 30000)
       },
]

 