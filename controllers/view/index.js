const router = require('express').Router();
const homeRoutes = require("./home");
const forumRoutes = require("./forum");


router.use('/forum', forumRoutes);
router.use('/', homeRoutes);




module.exports = router;
