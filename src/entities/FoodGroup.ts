import { ObjectType, Field, ID } from "type-graphql";

@ObjectType({ description: "The bedca Food Group" })
export class FoodGroup {
	@Field(() => ID)
	id: string;

	@Field()
	name: String;
}
