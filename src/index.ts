import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from "body-parser";

const app = express()
const port = process.env.PORT || 3000
app.use(cors())
app.use(bodyParser.json())

export type candidatesType = {
    id: number
    dateOfBirth: string
    name: string
    surname: string
    fatherName: string
}

const state:Array<candidatesType> = [
    {
        id: 1,
        dateOfBirth: '01-June-2007',
        name: 'Sergey',
        surname: 'Ivanov',
        fatherName: 'Petrovich',
    },
    {
        id: 2,
        dateOfBirth: '21-March-2003',
        name: 'Maxim',
        surname: 'Petrov',
        fatherName: 'Sergeevich',
    },
    {
        id: 3,
        dateOfBirth: '05-May-2010',
        name: 'Danil',
        surname: 'Sidorov',
        fatherName: 'Maksimovich',
    },
    {
        id: 4,
        dateOfBirth: '07-June-2002',
        name: 'Andrew',
        surname: 'Volkov',
        fatherName: 'Petrovich',
    },
    {
        id: 5,
        dateOfBirth: '11-July-2001',
        name: 'Maxim',
        surname: 'Semenov',
        fatherName: 'Lvovich',
    },
    {
        id: 6,
        dateOfBirth: '30-August-2000',
        name: 'Mike',
        surname: 'Surkov',
        fatherName: 'Alexandrovich',
    },
]

app.get('/', (req: Request, res: Response ) => {
    res.send(state)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})