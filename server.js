var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



var articles = {
'article-one': {
    title: 'article one | ragland ruban',
    heading: 'article one',
    date: 'feb 20,2017',
    content: `  
      <p>
           this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one
      </p>
      <p>
           this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one
      </p>
       <p>
           this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one
      </p> `
},
'article-two': { 
    title: 'article one | ragland ruban',
    heading: 'article two',
    date: 'feb 21,2017',
    content: ` 
      <p>
           this is the content of article two.
     </p> ` 
     },
'article-three': { title: 'article three| ragland ruban',
    heading: 'article three',
    date: 'feb 22,2017',
    content: `
      <p>
           this is the content of article three.
     </p>`  
     }
};

function createtemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content; 
    
    var htmlTemplate = `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=one"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
         <h3>
          ${heading}
         </h3>
        <div>
           ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
     </body>
    </html>
` ;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function (req, res) {
    var articlename = req.params.articlename;
  res.send(createtemplate(articles[articlename]));
}); 

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
}); 

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
