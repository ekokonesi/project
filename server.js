const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.use('*/css',express.static('public/css'));
app.use('*/js',express.static('public/js'));
app.use('*/img',express.static('public/img'));

app.get('/', (req, res) => {
    // Render an EJS file named 'index' in the 'views' directory
    res.render('home', { title: 'My Express App' });
    //res.sendFile(__dirname + '/index.html');
  });

  app.get('/index', (req, res) => {
    // Render an EJS file named 'index' in the 'views' directory
    res.render('index', { title: 'Landing Page' });
    //res.sendFile(__dirname + '/index.html');
  });

  app.get('/students_form_one', (req, res) => {
    // Render an EJS file named 'index' in the 'views' directory
    res.render('students_form_one', { title: 'Students Form' });
    //res.sendFile(__dirname + '/index.html');
  });

  app.get('/students_form_two', (req, res) => {
    res.render('students_form_two', { title: 'Students Form' });
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
