
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Countdown timer to your event' });
};