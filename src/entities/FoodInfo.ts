import { ObjectType, Field, ID } from "type-graphql";
import { FoodValue } from "./FoodValue";

@ObjectType({ description: "The bedca Food Item Info" })
export class FoodInfo {
	@Field(() => ID)
	id!: string;

	@Field()
	name!: string;

	@Field((_type) => [FoodValue], {
		description: `Param profile defines detail info level:
			0 - Energy, 1 - Macros, 2 - Detailed, 3 - All (default)`,
	})
	foodValues!: (profile: number) => FoodValue[];
}
