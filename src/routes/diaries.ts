import { newDiaryEntry } from './../types.d';
import express from "express";
import diaryServices from '../services/diaryServices';

const router = express.Router();

router.get("/", (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());

})

router.get("/:id", (_req, res) => {
    const diary = diaryServices.findById(+_req.params.id);// los params siempre vienen como string por lo tanto tenemos que transformarlos, lo podemos hacer con +_req.params.id o Number(_req.params.id)

    return (
        diary ? res.send(diary) : res.sendStatus(404)
    )
})

router.post("/", (_req, res) => {
    try {
        const { date, weather, visibility, comment } = _req.body;
        const newDiaryEntry = toNewDiaryEntry(_req.body);
        const addedDiaryEntry = diaryServices.addDiary({
            date,
            weather,
            visibility,
            comment
        });

        res.json(newDiaryEntry);
    } catch (e) {
        res.status(400).send(e.message)
    }

})

export default router;
