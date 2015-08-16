/*
 * GET Sponsor page.
 */

exports.index = function(req, res){
  // First Param is Template, Second Param is user-defined-data
  res.render('speaker', { title: 'Wiz Bussiness Speaker Profile Page' });
};