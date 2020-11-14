fetch("communes.json")
.then(Response=>Response.json())
.then(json=>console.log(json[1]));