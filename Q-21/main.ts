interface item {
    name:string 
    price: number
}

////creat two object
const book1: item ={
    name : "Type-scrips",
    price:380
}

const book2 : item={
    name:"python",
    price:877

}
console.log(`book name: ${book1.name}, price: ${book1.price} ` )
console.log(`book name: ${book2.name}, price: ${book2.price} ` )