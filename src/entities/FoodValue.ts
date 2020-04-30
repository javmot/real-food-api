import { ObjectType, Field, Float, ID } from "type-graphql";

@ObjectType({ description: "The bedca Food Value" })
export class FoodValue {
	@Field((_type) => ID)
	id!: string;

	@Field({ nullable: true })
	name?: string;

	@Field({ nullable: true })
	unit?: string;

	@Field((_type) => Float, { nullable: true })
	total?: number;
}
