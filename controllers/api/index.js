const router = require('express').Router();
const forumRoutes = require("./forum");

router.use('/forum', forumRoutes);

module.exports = router;
