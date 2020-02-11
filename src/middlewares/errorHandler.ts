export const errorHandler = (error, req, res, next) => {
  console.log('in error::', error);
  res.status(error.statusCode || 500).json({ status: false, message: error.message || "Something went wrong" });
}