import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TeamsService } from "./teams.service";
import { TeamsControllerBase } from "./base/teams.controller.base";

@swagger.ApiTags("teams")
@common.Controller("teams")
export class TeamsController extends TeamsControllerBase {
  constructor(protected readonly service: TeamsService) {
    super(service);
  }
}
