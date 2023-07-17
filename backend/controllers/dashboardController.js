class Dashboard {
  static getUserInfo = (req, res) => {
    res.send(req.user.username);
  };
}
module.exports = Dashboard;
