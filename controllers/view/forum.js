const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
    try{ //find projects and then order them by date made
        const commentData = await Comment.findAll({
            order: [["valid_from_date", "DESC"]]
        });
        const commentsMap = commentData.map((comment) => comment.get({plain:true}));
        res.render("forum", {comments: commentsMap});      
    } catch (err){
        console.log(err)
        res.status(400).json(err);
    }
});

module.exports = router;