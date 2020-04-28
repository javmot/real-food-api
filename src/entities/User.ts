import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "The User model" })
export class User {
	@Field(() => ID)
	id: string;

	@Field()
	@Property({ required: true, unique: true })
	email: string;

	@Property({ required: true })
	hash: string;
}

export const UserModel = getModelForClass(User);
