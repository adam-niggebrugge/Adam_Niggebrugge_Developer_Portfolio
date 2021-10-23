const router = require('express').Router();
const { CodeProject } = require('../../models');

router.get('/', async (req, res) => {
    try{ //find projects and then order them by date made
        const codeProjectData = await CodeProject.findAll({
            order: [["valid_from_date", "DESC"]]
        });

        const projectsMap = codeProjectData.map((project) => project.get({plain:true}));
        res.render("project", {projects: projectsMap});      
    } catch (err){
        console.log(err)
        res.status(400).json(err);
    }
});


module.exports = router;