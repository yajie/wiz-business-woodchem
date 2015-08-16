/*
 * GET Sponsor page.
 */

exports.index = function(req, res){
  // First Param is Template, Second Param is user-defined-data
  res.render('agenda', { title: 'Wiz Bussiness Event Agenda Page' });
};