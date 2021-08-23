exist();

function exist() {
   var account = new Account(13);
   console.log(account.amount);
   console.log(account.isActive);
}

function Account(amount){
   this.amount = amount;
   // !! operator checks if there is any value true/false
   // turns false if value is null, undefined or 0   
   this.isActive = !!amount;
}
