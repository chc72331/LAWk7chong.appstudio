btnCustomerAdd.onclick = function() {
  let name = inptName.value
  let address = inptAddress.value
  let city = inptCity.value
  let state = inptState.value
  let zipcode = inptZipcode.value
  let query = "INSERT INTO customers (`name`, `street`, `city`, `state`, `zipcode`) VALUES ('" + name + "', '" + address + "', '" + city + "', '" + state + "', '" + zipcode + "')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  if (req.status == 200) {
    if (req.responseText == 500)
      lblAddConfirmation.textContent = "You have successfully added the a new customer!"
    else
      lblAddConfirmation.textContent = "There was a problem with adding the pet to the database."
  } else
    lblAddConfirmation.textContent = "Error: " + req.status
}

btnBackAdd.onclick=function(){
  
}
