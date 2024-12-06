import { connect } from "mongoose";

export const dbConfig = async () => {
  try {
    await connect(process.env.MONGO_URI as string).then(() => {
      console.clear();
      console.log("db connected ❤🧨🎇🧨🧨🎇🧨🧨✨");
    });
  } catch (error) {
    console.log(error);
  }
};
