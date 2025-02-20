import { Module } from "@nestjs/common";
import { TeamsModuleBase } from "./base/teams.module.base";
import { TeamsService } from "./teams.service";
import { TeamsController } from "./teams.controller";
import { TeamsResolver } from "./teams.resolver";

@Module({
  imports: [TeamsModuleBase],
  controllers: [TeamsController],
  providers: [TeamsService, TeamsResolver],
  exports: [TeamsService],
})
export class TeamsModule {}
