const tipCollection = [
    {
        tip: "Tip One: Try not to overwater your fish"
    },
    {
        tip: "Tip Two: Love your fish"
    },
    {
        tip: "Tip Three: Don't forget to clean your fish!"
    }
]

// This is new code. Add this.
export const useTips = () => {
    return tipCollection.slice()
}