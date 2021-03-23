customerDelete.onshow=function(){
     // get all the pet data from the database when program loads
    query = "SELECT * FROM customers"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit worked.
        allCustomerData = JSON.parse(req.responseText)  // parse data in an array
        //console.log(allCustomerData)
        let message = ""
        for (i = 0; i < allCustomerData.length; i++)
               message = message + allCustomerData[i][1] + "\n"
           txtaCustomer2.value = message
    } else {
        // transit error
        lblMessage2 = `Error: ${req.status}`
    }  
}


btnDelete.onclick = function() {
  let customerDel = inptCustomerDel.value
  let found = false
  for (i = 0; i < allCustomerData.length; i++) {
    if (customerDel == allCustomerData[i][1]) {
      found = true
      break
    }
  }
  if (found == false)
    lblMessage2.textContent = "That customer name is not in the database."
  else if (found == true) {
    query = "DELETE FROM customers WHERE name = '" + customerDel + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) //transit worked.
      if (req.responseText == 500)
        lblMessage2.textContent = `You have successfully deleted the customer named ${customerDel}`
    else
      lblMessage2.textContent = `There was a problem deleting ${customerDel} from the database.`
    else
      lblMessage2.textContent = `Error: ${req.status}`
  }
}