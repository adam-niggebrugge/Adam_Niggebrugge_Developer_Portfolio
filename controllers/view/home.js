const router = require('express').Router();
const { CodeProject } = require('../../models');

router.get('/projects', async (req, res) => {
    try{

        const codeProjectData = await CodeProject.findAll({});

            const projectsMap = codeProjectData.map((project) => project.get({plain:true}));
            res.render("project", {projects: projectsMap});
        
    } catch (err){
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;