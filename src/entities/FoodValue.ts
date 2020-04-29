import { ObjectType, Field, Float, ID } from "type-graphql";

@ObjectType({ description: "The bedca Food Value" })
export class FoodValue {
	@Field(() => ID)
	id: string;

	@Field({ nullable: true })
	name?: string;

	@Field({ nullable: true })
	unit?: string;

	@Field(() => Float, { nullable: true })
	total?: number;
}
