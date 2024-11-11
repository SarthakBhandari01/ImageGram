import {
  createPostService,
  getAllPostService,
} from "../services/postService.js";

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

// api/v1/posts?limit=10&offset=0
export async function getAllPost(req, res) {
  try {
    const offset = req.query.offset || 0;
    const limit = req.query.limit || 10;
    const pagenatedPosts = await getAllPostService(offset, limit);
    console.log(pagenatedPosts);
    return res.status(200).json({
      success: true,
      message: "All posts fetched successfully",
      data: pagenatedPosts,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}
