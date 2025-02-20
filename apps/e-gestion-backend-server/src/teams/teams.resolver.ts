import * as graphql from "@nestjs/graphql";
import { TeamsResolverBase } from "./base/teams.resolver.base";
import { Teams } from "./base/Teams";
import { TeamsService } from "./teams.service";

@graphql.Resolver(() => Teams)
export class TeamsResolver extends TeamsResolverBase {
  constructor(protected readonly service: TeamsService) {
    super(service);
  }
}
