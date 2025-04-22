import userModel from '../models/user.model.js';

class UserService {

    userModel

    constructor() {
        this.userModel = userModel;
    }

    /**
     * @description Create a new user
     * @param {string} name 
     * @param {string} email 
     * @param {string} token 
     * @returns {Promise<userModel>} user
     * 
     * @error {Error}  - If any of the required fields are missing
     * @error {Error}  -  User already exists
     * @error {Error}  -  User not created for some reason
     */

    async createUser(name , email, token) {
        if(!name || !email || !token) {
            throw new Error('Name, email and token are required');
        }
        // Check if user already exists
        const existingUser = await this.userModel.findOne({ email });
        if (existingUser) {
            throw new Error('User already exists');
        }
        
        const user = await this.userModel.create({ name, email, token });

        if (!user) {
            throw new Error('User not created for some reason');
        }

        return user;
    }


}



const userService = new UserService();
export default userService;