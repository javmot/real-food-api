import { ObjectType, Field, ID } from "type-graphql";

@ObjectType({ description: "The bedca Food Group" })
export class FoodGroup {
	@Field((_type) => ID)
	id!: string;

	@Field()
	name!: string;
}

export interface FoodGroupInterface extends FoodGroup {}
