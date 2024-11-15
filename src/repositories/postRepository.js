import Post from "../schema/post.js";

export const createPost = async (caption, image, user) => {
  try {
    const newPost = await Post.create({ user, caption, image });
    return newPost;
  } catch (error) {
    console.log(error);
  }
};

export const findAllPost = async (offset, limit) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const countAllPost = async () => {
  try {
    const postCount = await Post.countDocuments();
    return postCount;
  } catch (error) {
    console.log(error);
  }
};

export const findPostById = async (id) => {
  try {
    const posts = await Post.findById(id);
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const deletePostById = async (id) => {
  try {
    const posts = await Post.findByIdAndDelete(id);
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const updatePostById = async (id, updateObject) => {
  try {
    const post = await Post.findByIdAndUpdate(id, updateObject,{new : true});
    return post;
  } catch (error) {
    console.log(error);
  }
};
