//counter code

var button = document.getElementById('counter');

button.Onclick = function () {
    var request = new XMLHttpRequest();
    
     requset.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) 
      {
          if (request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
    };
    
    request.open('GET','http://raglandruban.imad.hasura_app.io/counter' , true);
    request.send(null);
};
