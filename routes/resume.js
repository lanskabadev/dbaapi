const router = require("express").Router();
const Resume = require("../models/Resume");

router.post("/", async (req, res) => {
  const newResume = new Resume({
    category: req.body.category,
    title: req.body.title,
    year: req.body.year,
    desc: req.body.desc,
  });
  try {
    const savedResume = await newResume.save();
    res.status(200).json(savedResume);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const resume = await Resume.find({});
    res.status(200).json(resume);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    res.status(200).json(resume);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    const data = {
      category: req.body.category,
      title: req.body.title,
      year: req.body.year,
      desc: req.body.desc,
    };

    await resume.updateOne({ $set: data });
    res.status(200).json("The Resume has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    await resume.deleteOne();
    res.status(200).json("The Resume has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
