import {useState} from 'react'
const emojiArray : string[] = []

export default function EmojiButton () : JSX.Element {

    const [currentEmoji, nextEmoji] = useState("No Emoji has been chosen so far")
    const [PreviousEmoji, nextPreviousEmoji] = useState("No Emojis have been chosen so far")


    const [currentArray, nextArray] = useState<string[]>(emojiArray)

    const whaleEmoji = () => {
        nextPreviousEmoji(currentEmoji)
        nextEmoji("🐋")
        emojiArray.push("🐋")
        nextArray(emojiArray)
        
    }
    const coffeeEmoji = () => {
        nextPreviousEmoji(currentEmoji)
        nextEmoji("☕")
        emojiArray.push("☕")
        nextArray(emojiArray)
    }
    const dogEmoji = () => {
        nextPreviousEmoji(currentEmoji)
        nextEmoji("🐶")
        emojiArray.push("🐶")
        nextArray(emojiArray)
    }
    const unicornEmoji = () => {
        nextPreviousEmoji(currentEmoji)
        nextEmoji("🦄")
        emojiArray.push("🦄")
        nextArray(emojiArray)
    }
    const goatEmoji = () => {
        nextPreviousEmoji(currentEmoji)
        nextEmoji("🐐")
        emojiArray.push("🐐")
        nextArray(emojiArray)
    }

    console.log(emojiArray)
    console.log(`${currentArray} this is the previous array `)
    
    return (
        <>
        <button onClick={whaleEmoji} className="emoji-btn">{"🐋"}</button>
        <button onClick={coffeeEmoji} className="emoji-btn">{"☕"}</button>
        <button onClick={dogEmoji} className="emoji-btn">{"🐶"}</button>
        <button onClick={unicornEmoji} className="emoji-btn">{"🦄"}</button>
        <button onClick={goatEmoji} className="emoji-btn">{"🐐"}</button>
        <section>
        <h2>Current Emoji: {currentEmoji}</h2>
        <h2>Previous Emoji: {PreviousEmoji} </h2>
        <h2>Previous 2 Emojis: {PreviousEmoji}, {currentEmoji}  </h2>
        <h2>Previous Emojis: {currentArray}  </h2>
        </section>
        </>

    )
}