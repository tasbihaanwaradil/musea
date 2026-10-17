import express from "express";
import multer from "multer";
import { uploadFile } from "./services/storage.service.js";
import postModel from "./models/post.model.js";

const app = express();

//middleware
app.use(express.json());

//
const upload = multer({ storage: multer.memoryStorage() });

//api: create a post
app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await uploadFile(req.file.buffer);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  return res.status(201).json({
    message: "post created successfully",
    post,
  });
});

//get post from the server
app.get("/posts", async (req, res) => {
  const getAllPosts = await postModel.find();

  res.status(200).json({
    getAllPosts,
  });
});

export default app;
