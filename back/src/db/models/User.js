import { UserModel } from "../schemas/user";
import { attendanceModel } from '../schemas/attendance';
class User {
  static async create({ newUser }) {
    const createdNewUser = await UserModel.create(newUser);
    return createdNewUser;
  }

  static async findByEmail({ email }) {
    const user = await UserModel.findOne({ email });
    return user;
  }

  static async findById({ user_id }) {
    const user = await UserModel.findOne({ id: user_id });
    return user;
  }

  static async findAll() {
    const users = await UserModel.find({});
    return users;
  }

  static async update({ user_id, fieldToUpdate, newValue }) {
    const filter = { id: user_id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedUser = await UserModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedUser;
  }

  // static async updateAttendance({user_id}) {
  //   const filter = {id: user_id};
  //   const update = { attendance: newValue };
  //   const option = {returnOriginal: false};

  //   const updatedAttendance = await attendanceModel.findOneAndUpdate(
  //     filter,
  //     update,
  //     option,
  //   );
  //   return updatedAttendance;
  // }
}

export { User };
