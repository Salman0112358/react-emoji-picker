import EmojiButton from "./components/EmojiButton";
import PageFooter from "./components/PageFooter";
import { useState } from "react";

function App(): JSX.Element {
  return (
    <>
      <PageFooter />
      <main>
        <section>
          <EmojiButton />
        </section>
      </main>
    </>
  );
}

export default App;
