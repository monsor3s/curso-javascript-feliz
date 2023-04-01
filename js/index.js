const root = document.querySelector("#root")
const textTitle = 'Bom dia'
const textSmall = 'text pequeno'
const otherText = 'Outro texto'

const title = Title`
    color: red;
    ${textTitle}
    font-size: 20px;

`

root.insertAdjacentHTML('beforeend', title)


