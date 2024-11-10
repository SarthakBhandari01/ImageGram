import { createPostService } from "../services/postService.js";

export async function createPost(req, res) {
  const post = await createPostService({
    image: req.file.path,
    caption: req.body.caption,
  });
  return res.json({
    success: true,
    message: "post created successfully ",
    data: post,
  });
}

