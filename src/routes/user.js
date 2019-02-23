import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});
router.get('/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId])
});
router.post('/', (req, res) => {
  return res.send(
    `POST HTTP method on users`
  ) 
});
router.put('/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user ${req.params.userId}`
  )
});
router.delete('/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user ${req.params.userId}`
  )
});

export default router;