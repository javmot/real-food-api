import { ObjectType, Field, ID } from "type-graphql";
import { prop, arrayProp, getModelForClass } from "@typegoose/typegoose";
import { FoodValue, FoodValueInterface } from "./FoodValue";

@ObjectType({ description: "The bedca Food Item Info" })
export class FoodInfo {
	@Field(() => ID)
	id?: string;

	@Field({ nullable: true })
	@prop()
	name?: string;

	@Field((_type) => [FoodValue], {
		description: `Param profile defines detail info level:
			0 - Energy, 1 - Macros, 2 - Detailed, 3 - All (default)`,
	})
	@arrayProp({ items: FoodValue, required: true })
	foodValues!: (profile: number) => FoodValue[];
}

export const FoodInfoModel = getModelForClass(FoodInfo);

export interface FoodInfoInterface {
	id: string;
	name: string;
	foodValues: Array<FoodValueInterface>;
}
