console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $.ajax({
  method: 'GET', // index
  data:''
  url: '/api/profile',
  success: handleResponse,
  error: handleError
});

function handleResponse(req, res){

}

function handleError(){

  console.log("upss, error");
}

$.ajax({
method: 'GET', // FOR INDEX :id
data:''
url: '/api/profile',
success: handleResponse,
error: handleError
});

function handleResponse(req, res){

}

function handleError(){

console.log("upss, error");
}

$.ajax({
method: 'POST',
data: ''
url: '/api/profile',
success: handleResponse,
error: handleError
});

function post(req, res){


}

// CODE GOES HERE
// 
// $.ajax({
// method: 'UPDATE',
// url: '/api/update',
// success: handleRe,
// error: handleError
// });
// function create(req, res){
//
// }

$.ajax({
method: 'DELETE',
url: '/api/profile',
success: handleResponse,
error: handleError
});
function delete(req, res){


}
});
