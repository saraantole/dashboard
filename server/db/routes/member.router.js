const express = require('express')
const MemberControllers = require('../controllers/member.controllers')

const router = express.Router()

router.post('/member', MemberControllers.createMember)
router.put('/member/:id', MemberControllers.updateMember)
router.delete('/member/:id', MemberControllers.deleteMember)
router.get('/member/:id', MemberControllers.getMemberById)
router.get('/members', MemberControllers.getMembers)

module.exports = router