import { ObjectType, Field, ID } from "type-graphql";
import { FoodValue } from "./FoodValue";

@ObjectType({ description: "The bedca Food Item Info" })
export class FoodInfo {
	@Field(() => ID)
	id: string;

	@Field()
	name: string;

	@Field()
	energy: FoodValue;

	@Field()
	protein: FoodValue;

	@Field()
	fatMonounsaturated: FoodValue;

	@Field()
	fatPolyunsaturated: FoodValue;

	@Field()
	fatSaturated: FoodValue;

	@Field()
	cholesterol: FoodValue;
}
