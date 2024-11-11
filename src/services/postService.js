import {
  countAllPost,
  createPost,
  findAllPost,
} from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
  const caption = createPostObject.caption?.trim();
  const image = createPostObject.image;

  const post = await createPost(caption, image);
  return post;
};

export const getAllPostService = async (offset, limit) => {
  const posts = await findAllPost(offset, limit);

  //calculate total number of posts  and total number of pages
  const totalDocument = await countAllPost();
  const totalPages = Math.ceil(totalDocument / limit);
  return {
    posts,
    totalPages,
    totalDocument,
  };
};
