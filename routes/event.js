/*
 * GET Event page.
 */

exports.index = function(req, res){
  // First Param is Template, Second Param is user-defined-data
  res.render('event', { title: 'Wiz Bussiness Event Page' });
};