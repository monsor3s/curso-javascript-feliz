const pathEmoji = 'images/emoji-img.png'
const emoji = Character`
    width: 15%;
    ${pathEmoji}
`

const WrapperCharacters = (css, children) => (`
    <div style="${css}">${children}</div>
`)

const wrapperCharacters = WrapperCharacters`
    display: flex;
    justify-content: space-evenly;
    ${emoji + emoji + emoji}
`