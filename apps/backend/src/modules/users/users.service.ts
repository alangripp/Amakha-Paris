import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUserById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { profile: true },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async updateProfile(userId: string, data: any) {
    const profile = await this.prisma.profile.upsert({
      where: { userId },
      update: data,
      create: {
        userId,
        ...data,
      },
    });

    return profile;
  }

  async getAllUsers() {
    return this.prisma.user.findMany({
      include: { profile: true },
    });
  }

  async deleteUser(id: string) {
    await this.prisma.user.delete({
      where: { id },
    });

    return { message: 'User deleted successfully' };
  }
}
