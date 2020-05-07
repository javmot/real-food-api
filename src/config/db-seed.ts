import "reflect-metadata";
import faker from "faker";
import { uniqueId, sample, times } from "lodash";
import { MongoClient, ObjectID } from "mongodb";
import { UserInterface } from "../entities/User";
import { RecipeCategoryInterface } from "../entities/RecipeCategory";
import { RecipeInterface } from "../entities/Recipe";
import { IngredientInterface } from "../entities/Ingredient";
import { RecipeStepInterface } from "../entities/RecipeStep";
import { UnitEnum } from "../entities/UnitEnum";
import { DB_DEV } from "./db";

function getFakeUser(): UserInterface {
	const username = uniqueId(faker.name.firstName());
	return {
		email: faker.internet.email(),
		username,
		hash: "poiqwerqn4rqy23408helsdkahnfoa;ewigh",
	};
}

function getFakeCategory(): RecipeCategoryInterface {
	return {
		title: faker.commerce.department(),
	};
}

function getFakeIngredients(): IngredientInterface[] {
	return times(Math.round(faker.random.number(10))).map(() => ({
		_id: new ObjectID(),
		name: faker.commerce.product(),
		quantity: faker.random.number(100),
		unit: UnitEnum.GRAMS,
	}));
}

function getFakeRecipeSteps(): RecipeStepInterface[] {
	return times(Math.round(faker.random.number(10))).map(() => ({
		_id: new ObjectID(),
		title: faker.commerce.productAdjective(),
		description: faker.lorem.paragraph(10),
	}));
}

function getFakeRecipe(
	users: Array<any>,
	categories: Array<any>
): RecipeInterface {
	const defaultObj: any = {};
	const category = sample(categories) || defaultObj;
	const user = sample(users) || defaultObj;

	return {
		title: faker.commerce.productName(),
		time: `${Math.round(faker.random.number(40))} minutos`,
		categoryId: category._id,
		userId: user._id,
		ingredients: getFakeIngredients(),
		steps: getFakeRecipeSteps(),
		createdAt: new Date(),
		updatedAt: new Date(),
	};
}

MongoClient.connect(
	DB_DEV,
	{
		useUnifiedTopology: true,
	},
	async function cb(_err, client) {
		const db = client.db();
		db.dropDatabase();

		const usersCollection = db.collection("users");
		const categoriesCollection = db.collection("recipecategories");
		const recipesCollection = db.collection("recipes");

		await usersCollection.insertMany(times(20).map(() => getFakeUser()));

		await categoriesCollection.insertMany(
			times(3).map(() => getFakeCategory())
		);

		const usersDocs = await usersCollection.find().toArray();
		const categoriesDocs = await categoriesCollection.find().toArray();

		await recipesCollection.insertMany(
			times(50).map(() => getFakeRecipe(usersDocs, categoriesDocs))
		);

		// eslint-disable-next-line no-console
		console.log("Database seeded! :)");
		client.close();
	}
);
