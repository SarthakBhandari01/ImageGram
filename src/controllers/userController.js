export async function getProfile(req, res) {
  //call service layer
  console.log("inside getProfile");
  return res.json({
    success: false,
    message: "",
    data: null,
  });
}
