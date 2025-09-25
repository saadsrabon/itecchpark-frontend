import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'

createRoot(document.getElementById('root')!).render(
  <div>
<RouterProvider router={routes} />
  </div>,
)
