export interface gameResponse {
    game_id: number,
    game_name: string,
    game_started_on: string,
    game_theme: string,
    game_rules: string,
    game_master: string,
    players: string[],
    npcs: string[]
}