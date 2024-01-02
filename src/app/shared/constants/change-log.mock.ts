import { ChangeLog } from "../models/change-log.interface";

export const CHANGE_LOG_MOCK: ChangeLog[] = [
    { operation: 'Login', username: 'admin', dtm: '01/01/2024 14:00:00'}, 
    { operation: 'Login Failed', username: 'anatoly', dtm: '01/01/2024 14:10:00'}, 
    { operation: 'Login Failed', username: 'kenneth', dtm: '01/01/2024 14:15:00'}, 
]