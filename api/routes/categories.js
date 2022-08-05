const router = require("express").Router();
const User = require("../models/User");

const Category = require("../models/Category");

//POST
router.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const newCategory = new Category({
      name: req.body.name,
    });
    const category = await newCategory.save();

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ data: err });
  }
});

//GET

router.get("categories", async (req, res) => {
  try {
    const category = await newCategory.save();
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ data: err });
  }
});
module.exports = router;
