import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                consectetur rerum cum voluptatem fugiat possimus! Magni, enim,
                non explicabo ut atque a autem deserunt, sequi et eius dolorem
                consectetur placeat.
            </p>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
