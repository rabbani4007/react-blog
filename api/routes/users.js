const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      if (req.body.password) {
        const salt = await bcrypt.getSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ data: err });
    }
  } else {
    res.status(401).json("You can only update your account");
  }
});

//DELETE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been successfully.");
    } catch (err) {
      res.status(500).json({ data: err });
    }
  } else {
    res.status(401).json("You can only delete your account");
  }
});

//DELETE
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...other } = user._doc;

    res.status(200).json(other);
  } catch (err) {
    res.status(500).json({ data: err });
  }
});

module.exports = router;
