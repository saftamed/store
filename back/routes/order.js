const router = require("express").Router();
const { $where } = require("../models/Order");
const Order = require("../models/Order");
const { checkLogin } = require("./userMidelWare");



router.post("/success",checkLogin, async (req, res) => {
    
    try {
      const order = await Order.findByIdAndUpdate(req.body.id, {
        $set: {
            status: "paid"
        }
        });
      res.status(200).json({
            message: "Payment Successful"
        })
  } catch (err) {
    res.status(500).json(err);
  }
});






module.exports = router;