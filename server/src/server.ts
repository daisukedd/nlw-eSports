import express, { request } from 'express';
import { PrismaClient } from '@prisma/client'

const app = express();
const prisma = new PrismaClient({
    log: ['query']
})

app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany();

    return response.json(games);
});

app.post('/ads', (request, response) => {
    return response.status(201).json([]);
});

app.get('/games/:id/ads', (request, response) => {
    // const gameId = request.params.id;

    return response.json([
        { id: 1, title: 'Ad 1' },
        { id: 2, title: 'Ad 2' },
        { id: 3, title: 'Ad 3' },
        { id: 4, title: 'Ad 4' },
    ])
})
app.get('/ads/:id/discord', (request, response) => {
    // const adId = request.params.id;

    return response.json([])
})

app.listen(3000);