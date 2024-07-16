//EXeRCISE 14 :Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.  



/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

let Guest:string[]=[  "john", "barbie", "tuffi"]

let notPresent : string= "barbie";
let newGuest: string= "Dolli";
Guest[1]=newGuest;
for (let i=0; i<Guest.length; i++){
    console.log(`Hi `+ Guest[i] + `\n i am planing a dinner party at my home and i'd love for you come!'\n\n`)
};
console.log(`mr's.${notPresent} will not come a party`)