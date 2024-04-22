import { Weather, Visibility } from "./enums";

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>//utilizamos el de abajo 

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'> //utilizamos el omit para omitir uno en concreto
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>