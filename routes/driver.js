const router = require("express").Router();

const driver = require("../controllers/driver");

router.post("/driver/add", driver.add);

router.put("/driver/update/:id", driver.update);

router.delete("/driver/delete", driver.delete);

module.exports=router;
