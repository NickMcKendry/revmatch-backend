import Post from './model'

export const createPost = async (req, res) => {
  console.log(req.body);
  const { image, author, description, partslink } = req.body
  const newPost = new Post({ image, author, description, partslink })

  try{
    console.log('hello');
    return res.status(201).json({ post: await newPost.save()})
  } catch (e) {
    console.log('err');
    return res.status(e.status).json({error: true, message: "Error with Post"})
  }
}

export const getAllPosts = async (req, res) => {
  try {
    return res.status(200).json({ posts: await Post.find({}) })
  } catch(e) {
    return res.status(e.status).json({error: true, message: "Error with Post"})
  }
}
