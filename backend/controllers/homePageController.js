class Home {
  static sendName(req, res) {
    res.status(200).json({ name: req.user.name });
  }
}
module.exports = Home;
