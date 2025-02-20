/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Departments } from "./Departments";
import { DepartmentsCountArgs } from "./DepartmentsCountArgs";
import { DepartmentsFindManyArgs } from "./DepartmentsFindManyArgs";
import { DepartmentsFindUniqueArgs } from "./DepartmentsFindUniqueArgs";
import { CreateDepartmentsArgs } from "./CreateDepartmentsArgs";
import { UpdateDepartmentsArgs } from "./UpdateDepartmentsArgs";
import { DeleteDepartmentsArgs } from "./DeleteDepartmentsArgs";
import { TeamsFindManyArgs } from "../../teams/base/TeamsFindManyArgs";
import { Teams } from "../../teams/base/Teams";
import { DepartmentsService } from "../departments.service";
@graphql.Resolver(() => Departments)
export class DepartmentsResolverBase {
  constructor(protected readonly service: DepartmentsService) {}

  async _departmentsItemsMeta(
    @graphql.Args() args: DepartmentsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Departments])
  async departmentsItems(
    @graphql.Args() args: DepartmentsFindManyArgs
  ): Promise<Departments[]> {
    return this.service.departmentsItems(args);
  }

  @graphql.Query(() => Departments, { nullable: true })
  async departments(
    @graphql.Args() args: DepartmentsFindUniqueArgs
  ): Promise<Departments | null> {
    const result = await this.service.departments(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Departments)
  async createDepartments(
    @graphql.Args() args: CreateDepartmentsArgs
  ): Promise<Departments> {
    return await this.service.createDepartments({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Departments)
  async updateDepartments(
    @graphql.Args() args: UpdateDepartmentsArgs
  ): Promise<Departments | null> {
    try {
      return await this.service.updateDepartments({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Departments)
  async deleteDepartments(
    @graphql.Args() args: DeleteDepartmentsArgs
  ): Promise<Departments | null> {
    try {
      return await this.service.deleteDepartments(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Teams], { name: "teamsItems" })
  async findTeamsItems(
    @graphql.Parent() parent: Departments,
    @graphql.Args() args: TeamsFindManyArgs
  ): Promise<Teams[]> {
    const results = await this.service.findTeamsItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
