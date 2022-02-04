const Member = require('../models/member.model')

createMember = async (req, res) => {
    try {
        const body = req.body

        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a valid member',
            })
        }

        const member = await Member.create(body)

        if (!member) {
            return res.status(400).json({ success: false, error: 'You must provide a valid member' })
        }

        return res.status(200).json({
            success: true,
            id: member._id,
            message: 'Member created!',
        })
    } catch (e) {
        return res.status(400).json({ success: false, error: e })
    }
}

getMemberById = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        if (!member) {
            return res
                .status(404)
                .json({ success: false, error: `member not found` })
        }
        return res.status(200).json({ success: true, data: member })
    } catch (e) {
        return res.status(400).json({ success: false, error: e })
    }
}

getMembers = async (req, res) => {
    try {
        const members = await Member.find({});
        if (!members.length) {
            return res
                .status(404)
                .json({ success: false, error: `Members not found` })
        }
        return res.status(200).json({ success: true, data: members })
    } catch (e) {
        return res.status(400).json({ success: false, error: e })
    }
}

updateMember = async (req, res) => {
    try {
        const body = req.body

        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a body to update',
            })
        }

        const member = await Member.findById(req.params.id)

        if (!member) {
            return res
                .status(404)
                .json({ success: false, error: 'Member not found' })
        }

        member.name = body.name
        member.role = body.role
        member.image = body.image
        member.activity = body.activity
        member.groups = body.groups

        await member.save()
        return res.status(200).json({
            success: true,
            id: member._id,
            message: 'member updated!',
        })
    } catch (e) {
        return res.status(400).json({ success: false, error: e })
    }
}

deleteMember = async (req, res) => {
    try {
        const member = await Member.findByIdAndDelete(req.params.id)
        if (!member) {
            return res
                .status(404)
                .json({ success: false, error: 'Member not found' })
        }
        return res.status(200).json({ success: true, message: 'Member deleted!' })
    } catch (e) {
        return res.status(400).json({ success: false, error: e })
    }
}

module.exports = {
    createMember,
    getMembers,
    getMemberById,
    updateMember,
    deleteMember
}