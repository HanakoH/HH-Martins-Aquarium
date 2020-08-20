const fishCollection = [
    {
        image: "dory.jpeg",
        name: "Dory",
        species: "Royal Blue Tang",
        length: "18 cm",
        diet: "crustaceans",
        harvestLocation: ""
    },
    {
        image: "arc-eye-hawkfish.jpeg",
        name: "Archy",
        species: "Arc-Eye Hawkfish",
        length: "20 cm",
        diet: "shrimp and other small fishes",
        harvestLocation: "Seaward reefs in the pacific ocean"
    },
    {
        image: "Bartletts-Anthias.jpeg",
        name: "Pear",
        species: "Bartletts’ Anthias",
        length: "9 cm",
        diet: "zooplankton",
        harvestLocation: "Coral reef in the western Pacific ocean"
    },
    {
        image: "Axilspot-Wrasse.jpeg",
        name: "Axel Rose",
        species: "Axilspot Wrasse",
        length: "20 cm",
        diet: "mollusks",
        harvestLocation: "A clear lagoon"
    },
    {
        image: "Bicolor-Angelfish.jpeg",
        name: "Angle",
        species: "Bicolor Angelfish",
        length: "15 cm",
        diet: "coral polyps",
        harvestLocation: "Coral and rubble areas"
    },
    {
        image: "Bignose-Unicornfish.jpeg",
        name: "Patricia",
        species: "Bignose Unicornfish",
        length: "55 cm",
        diet: "zooplankton",
        harvestLocation: "Deep lagoon"
    },
    {
        image: "",
        name: "",
        species: "",
        length: "",
        diet: "",
        harvestLocation: ""
    },
    {
        image: "",
        name: "",
        species: "",
        length: "",
        diet: "",
        harvestLocation: ""
    },
    {
        image: "",
        name: "",
        species: "",
        length: "",
        diet: "",
        harvestLocation: ""
    },
    {
        image: "",
        name: "",
        species: "",
        length: "",
        diet: "",
        harvestLocation: ""
    },
    {
        image: "",
        name: "",
        species: "",
        length: "",
        diet: "",
        harvestLocation: ""
    },
    {
        image: "",
        name: "",
        species: "",
        length: "",
        diet: "",
        harvestLocation: ""
    },
    {
        image: "",
        name: "",
        species: "",
        length: "",
        diet: "",
        harvestLocation: ""
    },
    {
        image: "",
        name: "",
        species: "",
        length: "",
        diet: "",
        harvestLocation: ""
    },
    {
        image: "",
        name: "",
        species: "",
        length: "",
        diet: "",
        harvestLocation: ""
    },
    {
        image: "",
        name: "",
        species: "",
        length: "",
        diet: "",
        harvestLocation: ""
    },
    {
        image: "",
        name: "",
        species: "",
        length: "",
        diet: "",
        harvestLocation: ""
    }
]

    // This is new code. Add this.
export const useFish = () => {
    return fishCollection.slice()
}
