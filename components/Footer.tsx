import * as React from 'react'
import Link from 'next/link'

const View = () => (
  <footer>
    <ul>
      <li>
        <Link href="/">TOPへいく</Link>
      </li>
      <li>
        <a
          href="https://github.com/yagisuke/temporal-lab"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHubへいく
        </a>
      </li>
    </ul>
  </footer>
)

export default View
