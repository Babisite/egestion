import * as graphql from "@nestjs/graphql";
import { ResourcesResolverBase } from "./base/resources.resolver.base";
import { Resources } from "./base/Resources";
import { ResourcesService } from "./resources.service";

@graphql.Resolver(() => Resources)
export class ResourcesResolver extends ResourcesResolverBase {
  constructor(protected readonly service: ResourcesService) {
    super(service);
  }
}
