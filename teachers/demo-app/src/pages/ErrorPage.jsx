import { isRouteErrorResponse, useRouteError, Link } from 'react-router-dom'
import { paths } from '@/routes/paths'

export default function ErrorPage() {
  const error = useRouteError()
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
      ? error.message
      : 'Unknown error'

  return (
    <section className="page">
      <h1>Something went wrong</h1>
      <p>{message}</p>
      <p>
        <Link to={paths.home}>Back to home</Link>
      </p>
    </section>
  )
}
