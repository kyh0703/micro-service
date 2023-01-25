import e from 'express';
import express from 'express';

const router = express.Router();

router.get('/api/kyh/currentuser', (req, res) => {
  res.send('current user!');
});

export { router as currentUserRouter };
