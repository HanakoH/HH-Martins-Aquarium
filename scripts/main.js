console.log("You are so smaht");

import { useFish } from './fish/FishDataProvider.js';

import { FishList } from './fish/FishList.js';

const allTheFish = useFish();
console.log("all the fish", allTheFish);

for (const fish of allTheFish) {
    console.log("The item is", fish)
}

FishList();

// Now on to Tips

import { useTips } from './tips/TipDataProvider.js'
import { TipList } from './tips/TipList.js';

const allTheTips = useTips()

for (const tip of allTheTips) {
    console.log(tip)
}

TipList();