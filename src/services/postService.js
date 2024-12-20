import {
  countAllPost,
  createPost,
  deletePostById,
  findAllPost,
  findPostById,
  updatePostById,
} from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
  const caption = createPostObject.caption?.trim();
  const image = createPostObject.image;
  const userId = createPostObject.user;

  const post = await createPost(caption, image, userId);
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

export const deletePostService = async (id, user) => {
  const post = await findPostById(id);
  if (!post) {
    throw {
      status: 404,
      message: "Post not found",
    };
  }
  if (user != post.user) {
    throw {
      status: 401,
      message: "Unauthorized",
    };
  }
  const response = await deletePostById(id);
  return response;
};

export const updatePostService = async (id, updateObject) => {
  const response = await updatePostById(id, updateObject);
  return response;
};
