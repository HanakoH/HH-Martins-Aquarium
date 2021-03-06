/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

import { useFish } from './FishDataProvider.js';
import { Fish } from './Fish.js';

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    let fishHTMLRep = "";

    for (const fish of fishes) {
        fishHTMLRep += Fish(fish);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
            ${fishHTMLRep}
    `
}