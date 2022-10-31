const router = require("express").Router();
const CADPost = require("../models/CADPost");
const CAMPost = require("../models/CAMPost");
const AnsysPost = require("../models/AnsysPost");
const BlenderPost = require("../models/BlenderPost");
const fs = require("fs");
const { cloudinary } = require("../utils/cloudinary");

// CAD CAD
//create cad post
router.post("/cad", async (req, res) => {
  try {
    const newPost = new CADPost({
      catId: req.body.catId,
      title: req.body.title,
      desc: req.body.desc,
      img: req.body.img,
      imgId: req.body.imgId,
      zip: req.body.zip,
      preview: req.body.preview,
    });
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json({ err: "Failed to post" });
  }
});
//create cad post
router.post("/cam", async (req, res) => {
  try {
    const newPost = new CAMPost({
      catId: req.body.catId,
      title: req.body.title,
      desc: req.body.desc,
      img: req.body.img,
      imgId: req.body.imgId,
      zip: req.body.zip,
    });
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json({ err: "Failed to post" });
  }
});
// BLENDER
//create cad post
router.post("/blender", async (req, res) => {
  try {
    const newPost = new BlenderPost({
      title: req.body.title,
      desc: req.body.desc,
      img: req.body.img,
      imgId: req.body.imgId,
      link: req.body.link,
    });
    // "responseTo" in req.body && data.responseTo = req.body.responseTo;
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json({ err: "Failed to post" });
  }
});
// ANSYS
//create cad post
router.post("/ansys", async (req, res) => {
  try {
    const newPost = new AnsysPost({
      catId: req.body.catId,
      title: req.body.title,
      desc: req.body.desc,
      img: req.body.img,
      imgId: req.body.imgId,
      gif: req.body.gif,
      gifId: req.body.gifId,
      zip: req.body.zip,
    });
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json({ err: "Failed to post" });
  }
});

// UPDATE
// update post
router.put("/cad/:id", async (req, res) => {
  try {
    const post = await CADPost.findById(req.params.id);
    const data = {
      catId: req.body.catId,
      title: req.body.title,
      desc: req.body.desc,
      preview: req.body.preview,
      zip: req.body.zip,
    };
    if ("img" in req.body) {
      data.img = req.body.img;
      data.imgId = req.body.imgId;
      const path = post.imgId;
      await cloudinary.uploader.destroy(path);
    }

    await post.updateOne({ $set: data });
    res.status(200).json("the post has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});
// CAM CAM
// update post
router.put("/cam/:id", async (req, res) => {
  try {
    const post = await CAMPost.findById(req.params.id);
    const data = {
      catId: req.body.catId,
      title: req.body.title,
      desc: req.body.desc,
      zip: req.body.zip,
    };
    if ("img" in req.body) {
      data.img = req.body.img;
      data.imgId = req.body.imgId;
      const path = post.imgId;
      await cloudinary.uploader.destroy(path);
    }

    await post.updateOne({ $set: data });
    res.status(200).json("the post has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});
// update post
router.put("/ansys/:id", async (req, res) => {
  try {
    const post = await AnsysPost.findById(req.params.id);
    const data = {
      catId: req.body.catId,
      title: req.body.title,
      desc: req.body.desc,
      zip: req.body.zip,
    };
    if ("img" in req.body) {
      data.img = req.body.img;
      data.imgId = req.body.imgId;
      const path = post.imgId;
      await cloudinary.uploader.destroy(path);
    }
    if ("gif" in req.body) {
      data.gif = req.body.gif;
      data.gifId = req.body.gifId;
      const path = post.gifId;
      await cloudinary.uploader.destroy(path);
    }

    await post.updateOne({ $set: data });
    res.status(200).json("The post has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});
// update post
router.put("/blender/:id", async (req, res) => {
  try {
    const post = await BlenderPost.findById(req.params.id);
    const data = {
      catId: req.body.catId,
      title: req.body.title,
      desc: req.body.desc,
      link: req.body.link,
    };
    if ("img" in req.body) {
      data.img = req.body.img;
      data.imgId = req.body.imgId;
      const path = post.imgId;
      await cloudinary.uploader.destroy(path);
    }

    await post.updateOne({ $set: data });
    res.status(200).json("the post has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});
// BLENDER

// DELETE POSTS
router.delete("/cad/:id", async (req, res) => {
  try {
    const post = await CADPost.findById(req.params.id);

    await post.deleteOne();
    // user to delete file in the folder
    const path = post.imgId;
    if (path !== "") {
      await cloudinary.uploader.destroy(path);
    }

    res.status(200).json("the post has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/cam/:id", async (req, res) => {
  try {
    const post = await CAMPost.findById(req.params.id);

    await post.deleteOne();
    // user to delete file in the folder
    const path = post.imgId;
    if (path !== "") {
      await cloudinary.uploader.destroy(path);
    }

    res.status(200).json("the post has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/ansys/:id", async (req, res) => {
  try {
    const post = await AnsysPost.findById(req.params.id);

    await post.deleteOne();
    // user to delete file in the folder
    const path = post.imgId;
    if (path !== "") {
      await cloudinary.uploader.destroy(path);
    }

    const gifpath = post.gifId;
    if (path !== "") {
      await cloudinary.uploader.destroy(gifpath);
    }

    res.status(200).json("the post has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/blender/:id", async (req, res) => {
  try {
    const post = await BlenderPost.findById(req.params.id);

    await post.deleteOne();
    // user to delete file in the folder
    const path = post.imgId;
    if (path !== "") {
      await cloudinary.uploader.destroy(path);
    }

    res.status(200).json("the post has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET POST
router.get("/cad/:id", async (req, res) => {
  try {
    const post = await CADPost.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/cam/:id", async (req, res) => {
  try {
    const post = await CAMPost.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/ansys/:id", async (req, res) => {
  try {
    const post = await AnsysPost.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/blender/:id", async (req, res) => {
  try {
    const post = await BlenderPost.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET POST
router.get("/cadposts/:catId", async (req, res) => {
  try {
    const post = await CADPost.find({ catId: req.params.catId });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/camposts/:catId", async (req, res) => {
  try {
    const post = await CAMPost.find({ catId: req.params.catId });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/ansysposts/:catId", async (req, res) => {
  try {
    const post = await AnsysPost.find({ catId: req.params.catId });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/blender", async (req, res) => {
  try {
    const post = await BlenderPost.find({});
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
