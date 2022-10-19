const router = require("express").Router();
const CadCategory = require("../models/CADCategory");
const CAMCategory = require("../models/CAMCategory");
const AnsysCategory = require("../models/AnsysCategory");
const CADCategory = require("../models/CADCategory");

//create a post
router.post("/cad", async (req, res) => {
  try {
    const data = {
      title: req.body.title,
    };
    const newCadCat = new CadCategory(data);
    const saveCadCat = await newCadCat.save();
    res.status(200).json(saveCadCat);
  } catch (err) {
    res.status(500).json({ err: "Failed to post" });
  }
});

//create a cam category
router.post("/cam", async (req, res) => {
  try {
    const data = {
      title: req.body.title,
    };
    const newCamCat = new CAMCategory(data);
    const saveCamCat = await newCamCat.save();
    res.status(200).json(saveCamCat);
  } catch (err) {
    res.status(500).json({ err: "Failed to post" });
  }
});

//create a cam category
router.post("/ansys", async (req, res) => {
  try {
    const data = {
      title: req.body.title,
    };
    const newAnsysCat = new AnsysCategory(data);
    const saveAnsysCat = await newAnsysCat.save();
    res.status(200).json(saveAnsysCat);
  } catch (err) {
    res.status(500).json({ err: "Failed to post" });
  }
});

//get a cad category
router.get("/cad", async (req, res) => {
  try {
    const categories = await CADCategory.find({});
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ err: "Failed to fetch" });
  }
});
//get a cam category
router.get("/cam", async (req, res) => {
  try {
    const categories = await CAMCategory.find({});
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ err: "Failed to fetch" });
  }
});
//get a Ansys category
router.get("/ansys", async (req, res) => {
  try {
    const categories = await AnsysCategory.find({});
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ err: "Failed to fetch" });
  }
});

module.exports = router;
