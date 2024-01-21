import prisma from "../utils/prisma.js"
import UserType from "../types/user.js";

const authServices = {

        async createUser(userData: UserType) {
                const user = await prisma.user.create({
                        data: {
                            email: userData.email,
                            name: userData.name,
                            password: userData.password
                        }
                });
                return user;
        },

}

export default authServices;