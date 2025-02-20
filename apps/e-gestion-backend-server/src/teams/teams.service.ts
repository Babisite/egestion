import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeamsServiceBase } from "./base/teams.service.base";

@Injectable()
export class TeamsService extends TeamsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
