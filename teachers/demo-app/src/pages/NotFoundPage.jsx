import { Link } from 'react-router-dom'
import { paths } from '@/routes/paths'

export default function NotFoundPage() {
  return (
    <section className="page">
      <h1>404</h1>
      <p>This page does not exist.</p>
      <p>
        <Link to={paths.home}>Back to home</Link>
      </p>
    </section>
  )
}
