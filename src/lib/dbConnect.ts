import mongoose from "mongoose";

type ConncetionObject = {
  isConnected?: number;
};

const connection: ConncetionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already  connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

    connection.isConnected = db.connections[0].readyState;

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Connected Failed: ❌ ", error);

    process.exit(1);
  }
}

export default dbConnect;
