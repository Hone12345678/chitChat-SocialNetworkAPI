// get all users

// get a single user by id

// post a new user

// update a user user by id

// Delete a user by id

const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/user-controller');

// get all users
// /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// get a single user by id
// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
.route(':thoughtId/reactions')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;