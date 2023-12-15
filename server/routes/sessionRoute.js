const express = require("express");
const {
  createSession,
  getSessionLengthForAUser,
  getAllSessions,
  getLatestSession,
} = require("../controllers/sessionController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/new").post(isAuthenticatedUser, createSession);
router
  .route("/:bookingId")
  .get(
    isAuthenticatedUser,
    authorizeRoles("facilitator"),
    getSessionLengthForAUser
  );
router.route("/").get(getAllSessions);

module.exports = router;
