import { ObjectType, Field, ID } from "type-graphql";

@ObjectType({ description: "The bedca Food Item" })
export class FoodItem {
	@Field(() => ID)
	id: string;

	@Field()
	name: String;
}
