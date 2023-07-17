const User = require("../models/userModel");
class Dashboard {
  static getUserInfo = (req, res) => {
    const curr_id = req.user._id;
    User.findOne({
      _id: curr_id,
    }).then((data, err) => {
      if (err) {
        res
          .status(500)
          .json({ message: "Internal Server Error", success: false });
      }
      if (data) {
        res.status(200).json({
          name: data.name,
          username: data.username,
          likes: data.totalLikes,
          blogsPosted: data.blogsPosted,
        });
      }
    });
  };
}
module.exports = Dashboard;
