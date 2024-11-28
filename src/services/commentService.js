import {
  createComment,
  findCommentById,
} from "../repositories/commentRepository.js";
import { findPostById } from "../repositories/postRepository.js";

export const createCommentService = async (
  content,
  userId,
  onModel,
  commentableId
) => {
  try {
    const parent = await fetchCommentParent(onModel, commentableId);

    //1. check if the parent exist or not?
    if (!parent) {
      throw {
        message: `${onModel} not found`,
        status: 404,
      };
    }

    // 2. create comment
    const newComment = await createComment(
      content,
      userId,
      onModel,
      commentableId
    );

    //3 . Add comment to the parent and save it
    await addChildCommentToParent(onModel, parent, newComment);

    return newComment;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const addChildCommentToParent = async (onModel, parent, comment) => {
  if (onModel === "Post") {
    parent.comments.push(comment._id);
  } else if (onModel === "Comment") {
    parent.replies.push(comment._id);
  }
  await parent.save();
};

const fetchCommentParent = async (onModel, commentableId) => {
  try {
    let parent;
    if (onModel == "Post") {
      // comment is made on post so commentableId is post id

      parent = await findPostById(commentableId);
    } else if (onModel == "Comment") {
      // comment is made on comment so commentableId is comment id

      parent = await findCommentById(commentableId);
    }
    return parent;
  } catch (error) {
    console.log(error);
  }
};


export const findCommentByIdService=async (id)=>{
  try{
    const comment=await findCommentById(id);
    return comment;
  }catch(error){
    console.log(error);
  }
} 