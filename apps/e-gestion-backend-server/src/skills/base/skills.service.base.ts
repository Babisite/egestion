/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Skills as PrismaSkills } from "@prisma/client";

export class SkillsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SkillsCountArgs, "select">): Promise<number> {
    return this.prisma.skills.count(args);
  }

  async skillsItems(args: Prisma.SkillsFindManyArgs): Promise<PrismaSkills[]> {
    return this.prisma.skills.findMany(args);
  }
  async skills(
    args: Prisma.SkillsFindUniqueArgs
  ): Promise<PrismaSkills | null> {
    return this.prisma.skills.findUnique(args);
  }
  async createSkills(args: Prisma.SkillsCreateArgs): Promise<PrismaSkills> {
    return this.prisma.skills.create(args);
  }
  async updateSkills(args: Prisma.SkillsUpdateArgs): Promise<PrismaSkills> {
    return this.prisma.skills.update(args);
  }
  async deleteSkills(args: Prisma.SkillsDeleteArgs): Promise<PrismaSkills> {
    return this.prisma.skills.delete(args);
  }
}
