/*
 * GET Sponsor page.
 */

exports.index = function(req, res){
  // First Param is Template, Second Param is user-defined-data
  res.render('sponsor', { title: 'Wiz Bussiness Sponsor Page' });
};