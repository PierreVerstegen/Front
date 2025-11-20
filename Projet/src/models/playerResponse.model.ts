export interface CharacterStats {
    raw?: Record<string, string | number>;
    computed?: Record<string, number>;
}

export interface PlayerResponse {
    player_id: number;
    character: {
    name: string;
    charac_class: string;
    level:number;
    charac_money: number,
    charac_bio : string,
    charac_model : string,
    experience_points : number,
    user_id : number,
    stats: CharacterStats;
    abilities: string[];
    };
}