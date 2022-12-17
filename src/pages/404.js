import * as React from 'react'
import { Link } from 'gatsby'

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  display: 'flex',
  justifyContent: 'center',
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <div>
        <h1 style={headingStyles}>Page not found</h1>
        <p style={paragraphStyles}>
          <Link to='/'>Go home</Link>.
        </p>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
