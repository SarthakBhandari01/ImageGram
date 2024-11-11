import { createPost, findAllPost } from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
  const caption = createPostObject.caption?.trim();
  const image = createPostObject.image;

  const post = await createPost(caption, image);
  return post;
};

export const getAllPostService=async ()=>{
    const posts= await findAllPost();
    return posts;
}
