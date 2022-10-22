const express = require('express');
const router = express.Router();

const { isProduction } = require('../../config/keys');

/* GET csrf restore */
if (!isProduction) {
    router.get("/restore", (req, res) => {
        const csrfToken = req.csrfToken();
        res.status(200).json({
            'CSRF-TOKEN': csrfToken
        });
    });
}

module.exports = router;
