const router = require("express").Router();
const CADPost = require("../models/CADPost");
const CAMPost = require("../models/CAMPost");
const AnsysPost = require("../models/AnsysPost");
const BlenderPost = require("../models/BlenderPost");
const fs = require("fs");

// CAD CAD
//create cad post
router.post("/cad", async (req, res) => {
  try {
    const newPost = new CADPost({
      catId: req.body.catId,
      title: req.body.title,
      desc: req.body.desc,
      img: req.body.img,
      zip: req.body.zip,
      preview: req.body.preview,
    });
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json({ err: "Failed to post" });
  }
});

// update post
router.put("/cad/:id", async (req, res) => {
  try {
    const post = await CADPost.findById(req.params.id);
    const data = {
      catId: req.body.catId,
      title: req.body.title,
      desc: req.body.desc,
      preview: req.body.preview,
    };
    if ("img" in req.body) {
      data.img = req.body.img;
      const path = post.img;
      try {
        fs.unlinkSync("public/uploads/" + path);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
    }

    if ("zip" in req.body) {
      data.zip = req.body.zip;
      const path = post.zip;
      try {
        fs.unlinkSync("public/uploads/" + path);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
    }

    await post.updateOne({ $set: data });
    res.status(200).json("the post has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});

// CAD CAD

// CAM CAM
//create cad post
router.post("/cam", async (req, res) => {
  try {
    const newPost = new CAMPost({
      catId: req.body.catId,
      title: req.body.title,
      desc: req.body.desc,
      img: req.body.img,
      zip: req.body.zip,
    });
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json({ err: "Failed to post" });
  }
});
// update post
router.put("/cam/:id", async (req, res) => {
  try {
    const post = await CAMPost.findById(req.params.id);
    const data = {
      catId: req.body.catId,
      title: req.body.title,
      desc: req.body.desc,
    };
    if ("img" in req.body) {
      data.img = req.body.img;
      const path = post.img;
      try {
        fs.unlinkSync("public/uploads/" + path);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
    }

    if ("zip" in req.body) {
      data.zip = req.body.zip;
      const path = post.zip;
      try {
        fs.unlinkSync("public/uploads/" + path);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
    }

    await post.updateOne({ $set: data });
    res.status(200).json("the post has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});
// CAM CAM

// ANSYS
//create cad post
router.post("/ansys", async (req, res) => {
  try {
    const newPost = new AnsysPost({
      catId: req.body.catId,
      title: req.body.title,
      desc: req.body.desc,
      img: req.body.img,
      gif: req.body.gif,
      zip: req.body.zip,
    });
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json({ err: "Failed to post" });
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
    };
    if ("img" in req.body) {
      data.img = req.body.img;
      const path = post.img;
      try {
        fs.unlinkSync("public/uploads/" + path);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
    }

    if ("zip" in req.body) {
      data.zip = req.body.zip;
      const path = post.zip;
      try {
        fs.unlinkSync("public/uploads/" + path);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
    }

    if ("gif" in req.body) {
      data.gif = req.body.gif;
      const path = post.gif;
      try {
        fs.unlinkSync("public/uploads/" + path);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
    }

    await post.updateOne({ $set: data });
    res.status(200).json("The post has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});
// ANSYS

// BLENDER
//create cad post
router.post("/blender", async (req, res) => {
  try {
    const newPost = new BlenderPost({
      title: req.body.title,
      desc: req.body.desc,
      img: req.body.img,
      link: req.body.link,
    });
    // "responseTo" in req.body && data.responseTo = req.body.responseTo;
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json({ err: "Failed to post" });
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
      const path = post.img;
      try {
        fs.unlinkSync("public/uploads/" + path);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
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
    const path = post.img;
    if (path !== "") {
      try {
        fs.unlinkSync("public/uploads/" + path);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
    }
    const zippath = post.zip;
    if (path !== "") {
      try {
        fs.unlinkSync("public/uploads/" + zippath);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
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
    const path = post.img;
    if (path !== "") {
      try {
        fs.unlinkSync("public/uploads/" + path);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
    }
    const zippath = post.zip;
    if (path !== "") {
      try {
        fs.unlinkSync("public/uploads/" + zippath);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
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
    const path = post.img;
    if (path !== "") {
      try {
        fs.unlinkSync("public/uploads/" + path);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
    }

    const gifpath = post.gif;
    if (path !== "") {
      try {
        fs.unlinkSync("public/uploads/" + gifpath);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
    }

    const zippath = post.zip;
    if (path !== "") {
      try {
        fs.unlinkSync("public/uploads/" + zippath);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
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
    const path = post.img;
    if (path !== "") {
      try {
        fs.unlinkSync("public/uploads/" + path);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
    }
    const zippath = post.zip;
    if (path !== "") {
      try {
        fs.unlinkSync("public/uploads/" + zippath);
      } catch (err) {
        res.status(403).json({ erro: err });
      }
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
