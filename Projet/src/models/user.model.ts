export interface User {
    id : number;
email : string;
password : string;

isAdmin : boolean;
}

export interface UserResponse {
        id: number,
        password: string,
        last_login: string | null,
        is_superuser: boolean,
        username: string,
        first_name: string,
        last_name: string,
        email: string,
        is_staff: boolean,
        is_active: boolean,
        date_joined: string | null,
        createdat: string | null,
        updatedat: string | null,
        deletedat: string | null,
        active: boolean,
        groups: any[],
        user_permissions: any[]
}