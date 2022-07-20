
interface emojiProps {
    emojiString:string
}

export default function EmojiButton ({emojiString}:emojiProps) : JSX.Element {

    
    return (
        <button className="emoji-btn">{emojiString}</button>
    )

}