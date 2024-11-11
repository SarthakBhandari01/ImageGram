import { createPostService, getAllPostService } from "../services/postService.js";

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

export async function getAllPost(req,res){
  const  posts =await getAllPostService();
  console.log(posts);
  return res.json({
    success:true,
    message:"posts fetched successfully",
    data:posts
  });
}

