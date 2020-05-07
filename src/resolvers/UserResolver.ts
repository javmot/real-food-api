import { Resolver, Arg, Query, Mutation } from "type-graphql";
import bcrypt from "bcrypt";
import { User, UserModel } from "../entities/User";
import { UserInput } from "../inputs/UserInput";

const userCheckPass = async (user: User, password: string) => {
	return bcrypt.compare(password, user.hash);
};

@Resolver((_of) => User)
export default class UserResolver {
	@Query((_returns) => User, { nullable: false })
	me() {
		return {
			id: "7678554654",
			username: "jmota",
		};
	}

	@Query((_returns) => User, { nullable: true })
	async signin(@Arg("input") userInput: UserInput) {
		const user = await UserModel.findOne({
			email: userInput.email,
		});
		if (user && (await userCheckPass(user, userInput.password))) {
			return user;
		}

		return null;
	}

	@Mutation((_returns) => User, { nullable: false })
	async signup(@Arg("input") userInput: UserInput) {
		return UserModel.create({
			email: userInput.email,
			hash: await bcrypt.hash(userInput.password, 8),
		});
	}
}
