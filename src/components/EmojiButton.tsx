import { useState } from "react";

export default function EmojiButton(): JSX.Element {
  const [currentEmoji, nextEmoji] = useState("");
  const [PreviousEmoji, nextPreviousEmoji] = useState("");
  const [currentArray, nextArray] = useState<string[]>([currentEmoji]);

  const whaleEmoji = () => {
    nextPreviousEmoji(currentEmoji);
    nextEmoji("🐋");
    nextArray([...currentArray,currentEmoji])
    
  };
  const coffeeEmoji = () => {
    nextPreviousEmoji(currentEmoji);
    nextEmoji("☕");
    nextArray([...currentArray,currentEmoji])

  };
  const dogEmoji = () => {
    nextPreviousEmoji(currentEmoji);
    nextEmoji("🐶");
    nextArray([...currentArray,currentEmoji])

  };
  const unicornEmoji = () => {
    nextPreviousEmoji(currentEmoji);
    nextEmoji("🦄");
    nextArray([...currentArray,currentEmoji])
 
  };
  const goatEmoji = () => {
    nextPreviousEmoji(currentEmoji);
    nextEmoji("🐐");
    nextArray([...currentArray,currentEmoji])

  };


  return (
    <>
      <button onClick={whaleEmoji} className="emoji-btn">
        {"🐋"}
      </button>
      <button onClick={coffeeEmoji} className="emoji-btn">
        {"☕"}
      </button>
      <button onClick={dogEmoji} className="emoji-btn">
        {"🐶"}
      </button>
      <button onClick={unicornEmoji} className="emoji-btn">
        {"🦄"}
      </button>
      <button onClick={goatEmoji} className="emoji-btn">
        {"🐐"}
      </button>
      <section>
        <h2>Current Emoji: {currentEmoji}</h2>
        <h2>Previous Emoji: {PreviousEmoji} </h2>
        <h2>Previous 2 Emojis: {PreviousEmoji} {currentEmoji}</h2>
        <h2>Previous 5 Emojis: {currentArray.slice(0,7)}</h2>
        <h2>Previous Emojis: {currentArray} </h2>
      </section>
    </>
  );
}
