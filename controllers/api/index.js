const router = require('express').Router();
const commentingRoutes = require("./comment");

router.use('/comment', commentingRoutes);

module.exports = router;
