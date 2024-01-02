import { User } from "../models/user.interface";

export const USERS_MOCK: User[] = [
    { username: 'admin', isAdmin: true, isActive: true, created: '01/01/2023' },
    { username: 'anatoly', isAdmin: true, isActive: true, created: '11/08/2023'  },
    { username: 'kenneth', isAdmin: true, isActive: false, created: '09/10/2023'  },
]