
export interface BrigPlayerCreation {
    character: {
    charac_name: string;
    charac_class: string;
    charac_money: number,
    charac_bio : string,
    charac_model : string,
    experience_points : number,
    user_id : number,
    stats: Record<string, string | number>;
    abilities: string[];
    };
}