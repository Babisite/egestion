/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Teams as PrismaTeams } from "@prisma/client";

export class TeamsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TeamsCountArgs, "select">): Promise<number> {
    return this.prisma.teams.count(args);
  }

  async teamsItems(args: Prisma.TeamsFindManyArgs): Promise<PrismaTeams[]> {
    return this.prisma.teams.findMany(args);
  }
  async teams(args: Prisma.TeamsFindUniqueArgs): Promise<PrismaTeams | null> {
    return this.prisma.teams.findUnique(args);
  }
  async createTeams(args: Prisma.TeamsCreateArgs): Promise<PrismaTeams> {
    return this.prisma.teams.create(args);
  }
  async updateTeams(args: Prisma.TeamsUpdateArgs): Promise<PrismaTeams> {
    return this.prisma.teams.update(args);
  }
  async deleteTeams(args: Prisma.TeamsDeleteArgs): Promise<PrismaTeams> {
    return this.prisma.teams.delete(args);
  }
}
