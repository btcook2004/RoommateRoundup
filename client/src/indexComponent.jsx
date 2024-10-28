import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import IndexPage from "./index.jsx";
// import "/src/index.css"
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <IndexPage />
    </StrictMode>,
)
