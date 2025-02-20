import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResourcesServiceBase } from "./base/resources.service.base";

@Injectable()
export class ResourcesService extends ResourcesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
