'use server';

import { NextResponse } from 'next/server';
import mongoClient from '@/lib/mongodb';

export async function GET() {
  try {
    const db = (await mongoClient).db();
    const recipes = await db.collection('recipes').find({}).toArray();
    return NextResponse.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const db = (await mongoClient).db();
    const recipe = await request.json();
    const result = await db.collection('recipes').insertOne(recipe);
    return NextResponse.json({ ...recipe, id: result.insertedId });
  } catch (error) {
    console.error('Error adding recipe:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
