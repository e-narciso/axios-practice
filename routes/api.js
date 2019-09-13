const express = require("express");
const router  = express.Router();
const axios   = require("axios");

router.get("/poke/:pokeId", (req, res, next) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${req.params.pokeId}`)
    .then(responseFromAPI => {
      console.log("logging...", responseFromAPI.data);

      data = {
        pokes: responseFromAPI.data,
        loadedInfo: true
      };

      // if(!responseFromAPI.data.name.includes('saur')){
      //   data.loadedInfo = false;
      // }

      res.render("apiViews/apiHome", data);
    })
    .catch(err => next(err));
});

module.exports = router;
