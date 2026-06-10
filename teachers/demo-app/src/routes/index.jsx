import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/components/layout/RootLayout'
import ErrorPage from '@/pages/ErrorPage'
import NotFoundPage from '@/pages/NotFoundPage'
import HomePage from '@/pages/HomePage'
import { paths } from './paths'

// The landing page loads eagerly for a fast first paint; every other
// page is lazy so it ships as its own chunk and downloads on first visit.
export const router = createBrowserRouter([
  {
    path: paths.home,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: paths.students,
        lazy: async () => ({
          Component: (await import('@/pages/StudentsPage')).default,
        }),
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
