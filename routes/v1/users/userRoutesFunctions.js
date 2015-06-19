var userRoutes = {
  '/': {
    method: 'get',
    fn: function(req, res){
      res.send('list of users');
    }
  },

  '/new': {
    method: 'get',
    fn: function(req, res){
      res.send('new resource');
    }
  }
};

module.exports = userRoutes;
