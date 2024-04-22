import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types';
import diaryData from './diaries.json';

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

const getEntries = (): DiaryEntry[] => diaries;

const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id);
    if (entry !== null && entry !== undefined) {
        const { comment, ...restOfDiary } = entry
        return restOfDiary
    }
    return undefined;
}

const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return { id, date, weather, visibility }
    })
}

const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    }
    diaries.push(newDiary);
    return newDiary;
};

export default {
    getEntries,
    findById,
    getEntriesWithoutSensitiveInfo,
    addDiary
}