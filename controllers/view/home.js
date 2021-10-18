const router = require('express').Router();
const { Code_Projects } = require('../../models');


router.get('/', async (req, res) => {
    try{

        const codeProjectData = await Code_Projects.findAll({});

            const projectsMap = codeProjectData.map((project) => project.get({plain:true}));
            res.render("project", {projects: projectsMap});
        
    } catch (err){
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;