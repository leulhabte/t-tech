const AppError = require("../utils/appError");
var Config = require("../config/config.json");
var axios = require("axios");


exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return next(
        new AppError(404, "fail", "Please provide username l or password"),
        req,
        res,
        next,
      );
    }
    axios
    .post(Config.wordpress.token_auth_url, {
      username: username,
      password: password,
    })
    .then(function (response) {
    console.log(response)
      res.status(200).json({
       
        ...response.data, status: "success",
      });
     
    })
    .catch(function (error) {
    
     
      res.send(error.toJSON());
    });



   
  } catch (err) {
    next(err);
  }
};

//// to set password using code send to email
exports.set = async (req, res, next) => {
  try {
    const { username, password,code } = req.body;

    if (!email || !password || !code) {
      return next(
        new AppError(404, "fail", "Please provide code ,email and password"),
        req,
        res,
        next,
      );
    }
    axios
    .post(Config.wordpress.set_password, {
      email: email,
      password: password,
      code:code
    })
    .then(function (response) {
   
      res.status(200).json({
       
        ...response.data, status: "success",
      });
     
    })
    .catch(function (error) {
    
     
      res.send(error.toJSON());
    });



   
  } catch (err) {
    next(err);
  }
};


/// to validate code and return status
exports.validate = async (req, res, next) => {
  try {
    const { email,  code } = req.body;

    if (!email || !code) {
      return next(
        new AppError(404, "fail", "Please provide both code and email"),
        req,
        res,
        next,
      );
    }
    axios
    .post(Config.wordpress.validate_code, {
      code: code,
      email: email,
    })
    .then(function (response) {
    
      res.status(200).json({
       
        ...response.data, status: "success",
      });
     
    })
    .catch(function (error) {
    
     
      res.send(error.toJSON());
    });



   
  } catch (err) {
    next(err);
  }
};



/// to send code to email for resting password
exports.reset = async (req, res, next) => {
  try {
    const { email} = req.body;

    if (!email) {
      return next(
        new AppError(404, "fail", "Please provide email "),
        req,
        res,
        next,
      );
    }
    axios
    .post(Config.wordpress.reset_password, {
      email: email,
    
    })
    .then(function (response) {
  
      res.status(200).json({
       
        ...response.data, status: "success",
      });
     
    })
    .catch(function (error) {
    
     
      res.send(error.toJSON());
    });



   
  } catch (err) {
    next(err);
  }
};
