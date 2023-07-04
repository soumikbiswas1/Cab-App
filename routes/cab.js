const router = require("express").Router();

const cab = require("../controllers/cab");

router.post("/cab/add", cab.add);

router.put("/cab/update", cab.update);

router.delete("/cab/delete", cab.delete);

module.exports=router;

