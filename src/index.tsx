import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello World</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                consectetur rerum cum voluptatem fugiat possimus! Magni, enim,
                non explicabo ut atque a autem deserunt, sequi et eius dolorem
                consectetur placeat.
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Hic suscipit consequuntur, quod nostrum numquam laborum nisi
                    repellat doloremque labore esse unde, nulla magnam
                    assumenda, eveniet soluta fugiat reprehenderit facilis
                    officiis.
                </p>
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
