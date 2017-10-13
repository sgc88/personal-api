console.log("Sanity Check: JS is working!");

$(document).ready(function(){



var

  $.ajax({
  method: 'GET', // index
  url: '/api/profile',
  success: handleResponse,
  error: handleError
});

app.get('/api/profile', function index(req, res) {
  /* This endpoint responds with all of the todos
   */
  res.json(console);

});

function handleError(){

  console.log("upss, error");
}

$.ajax({
method: 'GET', // FOR INDEX :id
url: '/api/profile',
success: handleShowResponse,
error: handleShowError
});

function handleResponse(req, res){
  if()
}

function handleError(){

console.log("upss, error");
}

$.ajax({
method: 'POST',
data: ''
url: '/api/posting',
success: handlePostingRespond,
error: handlePostingError
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
url: '/api/deleting',
success: handleDeleteResponse,
error: handleDeleteError
});

});
