import { Module } from "@nestjs/common";
import { ResourcesModuleBase } from "./base/resources.module.base";
import { ResourcesService } from "./resources.service";
import { ResourcesController } from "./resources.controller";
import { ResourcesResolver } from "./resources.resolver";

@Module({
  imports: [ResourcesModuleBase],
  controllers: [ResourcesController],
  providers: [ResourcesService, ResourcesResolver],
  exports: [ResourcesService],
})
export class ResourcesModule {}
