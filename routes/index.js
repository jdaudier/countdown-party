
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Countdown Party: Countdown timer to your event' });
};