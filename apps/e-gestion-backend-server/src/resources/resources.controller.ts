import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResourcesService } from "./resources.service";
import { ResourcesControllerBase } from "./base/resources.controller.base";

@swagger.ApiTags("resources")
@common.Controller("resources")
export class ResourcesController extends ResourcesControllerBase {
  constructor(protected readonly service: ResourcesService) {
    super(service);
  }
}
