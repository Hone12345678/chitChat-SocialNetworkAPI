// get all thought

// get a single thought by id

// create a new thought

// update a user thought by id

// Delete a thought by id

const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thought-controller');
// const { addFriend, deleteFriend } = require('../../controllers/user-controller');

// get all thought
// /api/thought
router
  .route('/')
  .get(getAllThought)
  .post(createThought);

// get a single thought by id
// /api/thought/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router
.route('/:userId/friends/:friendsId')
.post(updateThought)
.delete(deleteThought);

module.exports = router;