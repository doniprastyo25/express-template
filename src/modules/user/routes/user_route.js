import express from 'express'
const router = express.Router();
const { authProcess, authenticateToken } = require('../../../settings/middleware/token');

router.post('/login', authProcess);

router.get('/apiProtection', authenticateToken, (req, res) => {
  res.send("You have access to this API");
});

module.exports = router;
