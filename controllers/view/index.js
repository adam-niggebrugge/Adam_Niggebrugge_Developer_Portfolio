const router = require("express").Router();
const homeRoutes = require("./codeProject");
const forumRoutes = require("./forum");
const peronsalRoutes = require("./personal");

router.use("/forum", forumRoutes);
router.use("/", homeRoutes);
router.use("/personal", peronsalRoutes);

module.exports = router;
