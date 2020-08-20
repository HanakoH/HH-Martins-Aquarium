/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { useTips } from './TipDataProvider.js';
import { Tip } from './Tip.js';

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".martinsTips")
    const theTips = useTips()

    let tipHTMLRep = "";

    for (const tip of theTips) {
        tipHTMLRep += Tip(tip);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
           ${tipHTMLRep}
    `
}