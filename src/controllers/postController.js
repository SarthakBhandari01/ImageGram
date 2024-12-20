import {
  createPostService,
  deletePostService,
  getAllPostService,
  updatePostService,
} from "../services/postService.js";

export async function createPost(req, res) {
  if (!req.file || !req.file.path) {
    return res.status(400).json({
      success: false,
      message: "Image is Required",
    });
  }
  const post = await createPostService({
    image: req.file.path,
    caption: req.body.caption,
    user: req.user.id,
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
    const response = await deletePostService(postId, req.user.id);
    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res
        .status(error.status)
        .json({ success: false, message: error.message });
    }
    return res
      .status(500)
      .json({ success: false, message: "Internal Service Error" });
  }
}

export async function updatePost(req, res) {
  try {
    const updateObject = req.body;
    const postId = req.query.id;
    if (req.file) {
      updateObject.image = req.file.path;
    }
    const updatedPost = await updatePostService(postId, updateObject);
    return res.status(200).json({
      success: true,
      message: "Post Updated SuccessFully",
      data: updatedPost,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}
