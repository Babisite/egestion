/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DepartmentsWhereInput } from "./DepartmentsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DepartmentsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DepartmentsWhereInput,
  })
  @ValidateNested()
  @Type(() => DepartmentsWhereInput)
  @IsOptional()
  @Field(() => DepartmentsWhereInput, {
    nullable: true,
  })
  every?: DepartmentsWhereInput;

  @ApiProperty({
    required: false,
    type: () => DepartmentsWhereInput,
  })
  @ValidateNested()
  @Type(() => DepartmentsWhereInput)
  @IsOptional()
  @Field(() => DepartmentsWhereInput, {
    nullable: true,
  })
  some?: DepartmentsWhereInput;

  @ApiProperty({
    required: false,
    type: () => DepartmentsWhereInput,
  })
  @ValidateNested()
  @Type(() => DepartmentsWhereInput)
  @IsOptional()
  @Field(() => DepartmentsWhereInput, {
    nullable: true,
  })
  none?: DepartmentsWhereInput;
}
export { DepartmentsListRelationFilter as DepartmentsListRelationFilter };
