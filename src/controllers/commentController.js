import {
  createCommentService,
  findCommentByIdService,
} from "../services/commentService.js";

export async function createComment(req, res) {
  try {
    const { content, onModel, commentableId } = req.body;
    const response = await createCommentService(
      content,
      req.user.id,
      onModel,
      commentableId
    );
    return res.status(201).json({
      success: true,
      message: "Comment created successfully",
      data: response,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function getCommentById(req, res) {
  try {
    const response = await findCommentByIdService(req.params.id);
    if (!response) {
      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Comment found successfully",
      data: response,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal service error" });
  }
}
