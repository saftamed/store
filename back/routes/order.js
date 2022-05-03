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


//GET ALL PRODUCTS
router.get("/me", checkLogin,async (req, res) => {
  try {
      orders = await Order.find({
        userId: req.user.id
      }).sort({ createdAt: -1 }).limit(5);
   console.log(orders);
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/last", checkLogin,async (req, res) => {
  try {
      const orders = await Order.find().populate("userId","email"). sort({ createdAt: -1 }).limit(5);

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/:id", checkLogin,async (req, res) => {
  try {
     const orders = await Order.findById( req.params.id ).populate("products.id");
   console.log(orders);
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;