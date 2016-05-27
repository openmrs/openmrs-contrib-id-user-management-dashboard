require('babel-register')({
  presets: ['react', 'es2015']
});

var React = require('react')
  , path = require('path')
  , ReactDOM = require('react-dom/server')
  , appComponent = require('../components/app.jsx').default;

var App = React.createFactory(appComponent);

module.exports = function(app) {
  app.engine('pug', require('pug').__express);
  app.set('view engine', 'pug');
  app.set('views', path.join(__dirname, '../views'));

  app.get('/', function(req, res){
    res.render('index', {
      react: ReactDOM.renderToString(App())
    })
  });
};