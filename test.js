const accountID = 144555
let accountName = "Neo Sedai"
var accountPassword = "123456"
let accountState

accountCity = "Damak"
//accountID = 2  //not allowed because accountID is a constant
console.log(accountID)
accountEmail ="neosedai@gmail.com"
console.log(accountEmail)
console.table([accountID, accountName, accountPassword, accountCity, accountEmail, accountState])

/*
prefer using const and let instead of var because var is function scoped and can lead to unexpected behavior. Use const for variables that should not be reassigned, and let for variables that may change.
and also if we declare the variable without var, let or const it will be a global variable and can lead to unexpected behavior.
*/