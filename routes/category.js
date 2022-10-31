const router = require("express").Router();

const CAMCategory = require("../models/CAMCategory");
const AnsysCategory = require("../models/AnsysCategory");
const CADCategory = require("../models/CADCategory");

//create a post
router.post("/cad", async (req, res) => {
  try {
    const data = {
      title: req.body.title,
    };
    const newCadCat = new CADCategory(data);
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

router.post("/cad", async (req, res) => {
  try {
    const data = {
      title: req.body.title,
    };
    const newCadCat = new CADCategory(data);
    const saveCadCat = await newCadCat.save();
    res.status(200).json(saveCadCat);
  } catch (err) {
    res.status(500).json({ err: "Failed to post" });
  }
});

// update
router.put("/cad/:id", async (req, res) => {
  try {
    const cat = await CADCategory.findById(req.params.id);
    const data = {
      title: req.body.title,
    };

    await cat.updateOne({ $set: data });
    res.status(200).json("the Category has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/cam/:id", async (req, res) => {
  try {
    const cat = await CAMCategory.findById(req.params.id);
    const data = {
      title: req.body.title,
    };

    await cat.updateOne({ $set: data });
    res.status(200).json("The Category has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/ansys/:id", async (req, res) => {
  try {
    const cat = await AnsysCategory.findById(req.params.id);
    const data = {
      title: req.body.title,
    };

    await cat.updateOne({ $set: data });
    res.status(200).json("The Category has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all a cad category
router.get("/cad", async (req, res) => {
  try {
    const categories = await CADCategory.find({});
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ err: "Failed to fetch" });
  }
});

router.get("/cad/:id", async (req, res) => {
  try {
    const categories = await CADCategory.findById(req.params.id);
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
router.get("/cam/:id", async (req, res) => {
  try {
    const categories = await CAMCategory.findById(req.params.id);
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
router.get("/ansys/:id", async (req, res) => {
  try {
    const categories = await AnsysCategory.findById(req.params.id);
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ err: "Failed to fetch" });
  }
});

//Delete category

router.delete("/cad/:id", async (req, res) => {
  try {
    const cat = await CADCategory.findById(req.params.id);
    await cat.deleteOne();
    res.status(200).json("the post has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/cam/:id", async (req, res) => {
  try {
    const cat = await CAMCategory.findById(req.params.id);
    await cat.deleteOne();
    res.status(200).json("the post has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/ansys/:id", async (req, res) => {
  try {
    const cat = await AnsysCategory.findById(req.params.id);
    await cat.deleteOne();
    res.status(200).json("The post has been Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
