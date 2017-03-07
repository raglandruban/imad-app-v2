//counter code

var button = document.getElementById('counter');


button.Onclick = function(){
    var request = new XMLHttpRequest();
    
     request.Onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) 
      {
          if (request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter;
          }
      }
    };
    
    request.open('GET', 'http://raglandruban.imad.hasura-app.io/counter', true);
    request.send(null);
};
