
import express from 'express';
import { MemberController } from '../controllers/memberController';

const router = express.Router();

router.post('/members', MemberController.createMember);
router.get('/members', MemberController.getMembers);
router.post('/import-members', MemberController.importMembers);

export { router };
                