import {
  createPostService,
  deletePostService,
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

//delete Post
export async function deletePost(req, res) {
  try {
    const postId = req.query.id;
    const response = await deletePostService(postId);
    if(!response){
      return res.status(404).json({
        success:false,
        message:"Post not found",
      })
    }
    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Service Error" });
  }
}
