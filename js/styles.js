
const style = `<style>
        * {
            margin: 0;
            border: 0;
            box-sizing: border-box;
        }

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #2C3A47;    
        }

        #root {
            box-sizing: border-box;
            font-family: 'Press Start 2P', cursive;
            background-color: #3B3B98;
            width: 40vw;
            min-width: 768px;
            height: 65vh;
            text-align: center;
            padding-top: 4rem;
        }
    </style>`

    const head = document.querySelector('head')

    head.insertAdjacentHTML('beforeend', style)