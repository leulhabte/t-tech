const AppError = require("../utils/appError");
var Config = require("../config/config.json");
var axios = require("axios");

exports.add = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const token = req.headers.authorization;

    if (!title || !content) {
      return next(
        new AppError(404, "fail", "Please provide title and content"),
        req,
        res,
        next
      );
    }
    axios
      .post(
        Config.wordpress.post_endpoint,
        {
          title: title,
          content: content,
          excerpt: "excerpt",
          ...req.body,
        },
        {
          headers: {
            Authorization: "Bearer" + token,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        res.status(200).json({
          ...response.id,
          status: "success",
        });
      })
      .catch(function (error) {
        res.send({ status: "error" });
      });
  } catch (err) {
    next(err);
  }
};

exports.getPosts = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    axios
      .get(
        Config.wordpress.post_endpoint,
        {},
        {
          headers: {
            Authorization: "Bearer" + token,
          },
        }
      )
      .then(function (response) {
        res.send(response);
      })
      .catch(function (error) {
        res.send({ status: "error" });
      });
  } catch (err) {
    next(err);
  }
};
