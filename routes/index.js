var express = require('express');
var router = express.Router();
let article = require('../custom_modules/article.js');
let course = require('../custom_modules/course.js');
let form = require('../custom_modules/form.js');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/course', function(req, res, next) {
  res.render('course', { title: 'Our courses', course:course.allCourse });
});

router.get('/course/:id', function(req, res, next) {
  res.render('eachcourse', { course: course.getCourseById(req.params.id) });
});

router.get('/mongo', function(req, res, next) {
  res.render('mongo', { title: 'Mongo courses', course:course.allCourse });
});

router.get('/node', function(req, res, next) {
  res.render('node', { title: 'Node courses', course:course.allCourse });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Blog', article:article.allArticle });
});

router.get('/blog/:id', function(req, res, next) {
  res.render('article', { article:article.getArticleById(req.params.id) });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact us' });
});

router.post('/contact', function(req, res, next) {
  let temp = form.addForm(req.body);
    if(temp){
      res.render('send')
    }
  console.log(req.body);
});


module.exports = router;
