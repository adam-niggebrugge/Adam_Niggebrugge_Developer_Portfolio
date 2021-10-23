const router = require('express').Router();
const { Comment } = require('../../models');


router.post('/create', async (req, res) => {
  try {

    const newComment = await Comment.create({
      body: req.body.body,
      user_name: req.body.fName,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
  