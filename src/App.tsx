import EmojiButton from "./components/EmojiButton";
import PageFooter from "./components/PageFooter";


function App(): JSX.Element {
  return (
    <>
    <PageFooter/>
    <main>
      <section>
      <EmojiButton
      emojiString="🐋 "/>
      <EmojiButton
      emojiString="☕"/>
      <EmojiButton
      emojiString="🐶"/>
      <EmojiButton
      emojiString="🦄"/>
      <EmojiButton
      emojiString="🐐"/>
      </section>
      <section>
        <h2>Current Emoji: </h2>
        <h2>Previous Emoji: </h2>
        <h2>Previous 2 Emojis: </h2>
      </section>



    </main>
    </>

   
  );
}

export default App;
