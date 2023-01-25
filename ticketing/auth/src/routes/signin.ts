import express from 'express';

const router = express.Router();

router.post('/api/kyh/signin', (req, res) => {
  res.send('signin');
});

export { router as signinRouter };
