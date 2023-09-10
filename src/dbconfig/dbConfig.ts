import mongoose from "mongoose";

export async function connect() {
	try {
		mongoose.connect(process.env.MONGO_URL!);
		const connection = mongoose.connection;
		connection.on(`connected`, () => {
			console.log(`MongoDB COnnected successfully`);
		});
		connection.on(`error`, (error) => {
			console.error(`Couldn't connect to mongoDB, -> ${error}`);
			process.exit();
		});
	} catch (error) {
		console.error(`Something went wrong -> ${error}`);
	}
}
