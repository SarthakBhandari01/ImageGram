export async function createPost(req, res) {
  console.log(req.file); 
  return res.json({ message: "post created successfully " });
}


