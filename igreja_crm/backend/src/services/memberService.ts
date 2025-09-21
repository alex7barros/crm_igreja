
import { prisma } from '../prisma/client';
import { Member } from '@prisma/client';

class MemberService {
  static async createMember(memberData: any): Promise<Member> {
    return prisma.member.create({
      data: memberData
    });
  }

  static async getAllMembers(): Promise<Member[]> {
    return prisma.member.findMany();
  }
}

export { MemberService };
                