import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MessagePage from "./messagepage.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MessagePage />
    </StrictMode>,
)
