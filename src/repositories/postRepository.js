import Post from "../schema/post.js";

export const createPost = async (user, caption, image) => {
  try {
    const newPost = await Post.create({ user, caption, image });
    return newPost;
  } catch (error) {
    console.log(error);
  }
};

export const findAllPost=async ()=>{
    try{
        const posts=await Post.find();
        return posts;
    }catch(error){
        console.log(error);
    }
}

export const findPostById=async (id)=>{
    try{
        const posts=await Post.findById(id);
        return posts;
    }catch(error){
        console.log(error);
    }
}

export const deletePostById=async (id)=>{
    try{
        const posts=await Post.findByIdAndDelete(id);
        return posts;
    }catch(error){
        console.log(error);
    }
}
