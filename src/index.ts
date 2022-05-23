import express, { Request, Response } from 'express'
const app = express()
const port = 3000

export type documentsType = {
    id: number
    dateOfCreation: string
    name: string
    content: string
}

const state:Array<documentsType> = [
    {
        id: 1,
        dateOfCreation: 'June',
        name: '1 doc',
        content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        id: 2,
        dateOfCreation: 'March',
        name: '2 doc',
        content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        id: 3,
        dateOfCreation: 'May',
        name: '3 doc',
        content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        id: 4,
        dateOfCreation: 'June',
        name: '4 doc',
        content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        id: 5,
        dateOfCreation: 'July',
        name: '5 doc',
        content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        id: 6,
        dateOfCreation: 'August',
        name: '6 doc',
        content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
]

app.get('/', (req: Request, res: Response ) => {
    res.send(state)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})