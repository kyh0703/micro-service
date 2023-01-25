import express from 'express';

const router = express.Router();

router.post('/api/kyh/signout', (req, res) => {
  res.send('signout');
});

export { router as signoutRouter };
