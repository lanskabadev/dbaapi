const router = require("express").Router();
const Setting = require("../models/Settings");

router.post("/", async (req, res) => {
  const newSetting = new Setting({
    name: req.body.name,
    short: req.body.short,
    email: req.body.email,
    mobile: req.body.mobile,
    website: req.body.website,
    instagram: req.body.instagram,
    facebook: req.body.facebook,
    youtube: req.body.youtube,
    img: req.body.img,
    desc: req.body.desc,
  });

  try {
    const savedSetting = await newSetting.save();
    res.status(200).json(savedSetting);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const seting = await Setting.findById("634fc5fb9ba7c0c7bf483e7a");
    res.status(200).json(seting);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/", async (req, res) => {
  try {
    const setting = await Setting.findById("634fc5fb9ba7c0c7bf483e7a");
    const data = {
      name: req.body.name,
      short: req.body.short,
      email: req.body.email,
      mobile: req.body.mobile,
      website: req.body.website,
      instagram: req.body.instagram,
      facebook: req.body.facebook,
      youtube: req.body.youtube,
      desc: req.body.desc,
    };
    if ("img" in req.body) {
      data.img = req.body.img;
      const path = setting.img;
      try {
        fs.unlinkSync("public/uploads/" + path);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
    }

    await setting.updateOne({ $set: data });
    res.status(200).json("The Settings has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
