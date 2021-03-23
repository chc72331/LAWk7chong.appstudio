customerUpdate.onshow = function() {
  // populate the textarea with all the customer names
  txtaCustomerList3_contents.style.height = "150px"
  query = "SELECT * FROM customers"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    let message = ""
    for (i = 0; i < results.length; i++)
      message = message + results[i][1] + "\n"
    txtaCustomerList3.value = message
  }
}

btnCustomerUpdate.onclick = function() {
  let newName = inptNewName.value
  let oldName = inptOldName.value
  query = "SELECT * FROM customers WHERE `name` = '" + oldName + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  if (req.status == 200) {
    allCustomerData = JSON.parse(req.responseText)
    if (allCustomerData.length > 0) {
      query = "UPDATE customers SET `name` ='" + newName + "' WHERE `name` = '" + oldName + "'"
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
      if (req.status == 200) // transit worked
        if (req.responseText == 500) // update worked
          lblUpdateConfirmation.textContent = `You have successfully updated ${oldName} to ${newName}.`
      else
        lblUpdateConfirmation.textContent = `There was a problem updating ${oldName} to ${newName}.`
      else // transit error
        lblUpdateConfirmation.textContent = `Error: ${req.status}`
    }
  } // if 200
}

btnBackUpd.onclick=function(){
  ChangeForm(homepage)
}
