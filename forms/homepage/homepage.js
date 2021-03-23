// Global variables for database calls
let req = {} // Indicates empty object
let query = ""
let results = []
let pw = "ac@T!.........."  // put your database password here
let netID = "chc72331"
let allCustomerData = []


// Homepage links for all the pages
btnSelect.onclick=function(){
  ChangeForm(customerSelect)
}

btnDel.onclick=function(){
  ChangeForm(customerDelete)
}

btnAdd.onclick=function(){
  ChangeForm(customerAdd)
}

btnUpdate.onclick=function(){
  ChangeForm(customerUpdate)
}