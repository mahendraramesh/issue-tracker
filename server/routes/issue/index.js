const router = require('express').Router();
const Issue = require('../../models/issue');

router.route('/issues').get((request, response) => {
    Issue.find((err, issues) => {
        if(err)
            response.status(400).json({});
        else {
            response.status(200).json(issues);
        }
    });
});

router.route('/issues/:id').get((request, response) => {
    Issue.findOne({ number: request.params.id}, (err, issue) => {
        if(err)
            response.status(400).send("Failed to retrieve issue");
        else {
            response.status(200).json(issue);
        }
    });
});

router.route('/issues/add').post((request, response) => {
    let issue = new Issue(request.body);

    issue.save()
            .then(() => {
                response.status(200).send("Issue Added Successfully");
            })
            .catch(() => {
                response.status(400).send("Failed to add the issue");
            });
});

/* router.route('/issues/update/:id').post((request, response) => {
    Issue.findOne({ number: request.params.id })

    
}); */

router.route('issues/delete/:id').delete((request, response) => {
    Issue.findOneAndDelete({ number: request.params.id }, (err, issue) => {
        if(err)
            response.status(400).send("Failed to delete issue")
        else {
            response.status(200).send("Issue deleted successfully");
        }
    })
});

module.exports = router;