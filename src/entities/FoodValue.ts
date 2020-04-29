import { ObjectType, Field, ID } from "type-graphql";

@ObjectType({ description: "The bedca Food Value" })
export class FoodValue {
	@Field(() => ID)
	unit: string;

	@Field()
	total: string;
}
