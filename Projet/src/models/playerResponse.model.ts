export interface CharacterStats {
    raw?: Record<string, string | number>;
    computed?: Record<string, number>;
}

export interface PlayerResponse {
    player_id: number;
    character: {
    name: string;
    stats: CharacterStats;
    abilities: string[];
    };
}