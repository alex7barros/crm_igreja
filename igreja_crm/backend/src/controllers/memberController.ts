
import { Request, Response } from 'express';
import { MemberService } from '../services/memberService';

class MemberController {
  static async createMember(req: Request, res: Response) {
    const { name, birthdate, gender, contact, address, family, status } = req.body;
    try {
      const newMember = await MemberService.createMember({ name, birthdate, gender, contact, address, family, status });
      return res.status(201).json(newMember);
    } catch (err) {
      return res.status(500).json({ error: 'Failed to create member' });
    }
  }

  static async getMembers(req: Request, res: Response) {
    try {
      const members = await MemberService.getAllMembers();
      return res.status(200).json(members);
    } catch (err) {
      return res.status(500).json({ error: 'Failed to get members' });
    }
  }

  static async importMembers(req: Request, res: Response) {
    // Importação via CSV logic here
  }
}

export { MemberController };
                