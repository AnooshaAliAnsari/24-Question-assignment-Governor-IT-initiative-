/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
let Guest:string[]=[  "john", "barbie", "tuffi"]

let notPresent : string= "barbie";
let newGuest: string= "Dolli";
Guest[1]=newGuest;
for (let i=0; i<Guest.length; i++){
    console.log(`${Guest} i found a bigger dinner table`)
};
console.log(`mr's.${notPresent} will not come a party`);

Guest.unshift("hennery");
Guest.splice(Guest.length /2,0, "rose");
Guest.push("tina")
 
for(let i=0; i<Guest.length; i++){
    console.log(Guest[i]+ ` i found a mega dinner\n\n`)

}