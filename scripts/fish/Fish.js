export const Fish = (fishObj) => {
    return `
    <div class="fishList-card">
        <div class="card-image">
            <img class="fishCard-image" src="images/${fishObj.image}" alt="${fishObj.species}">
            </div>
            <ul>
                <li>Given Name: ${fishObj.name}</li>
                <li>Species: ${fishObj.species}</li>
                <li>Length: ${fishObj.length}</li>
                <li>Diet: ${fishObj.diet}</li>
                <li>Harvest Location: ${fishObj.harvestLocation}</li>
            </ul>
    </div>
    `
}