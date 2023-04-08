const pathEmoji = 'images/emoji-img.png'
const emoji = Character`
    width: 12%;
    ${pathEmoji}
`

const WrapperCharacters = (css, children) => (`
    <div style="${css}">${children}</div>
`)

const wrapperCharacters = WrapperCharacters`
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
    ${emoji + emoji + emoji}
`