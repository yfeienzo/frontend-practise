import Link from 'next/link'
 
function Home() {
  return (
    <ul>
      <li>
        <Link href="/responsive-list">Responsive Four Cards</Link>
      </li>
      <li>
        <Link href="/responsive-product">Responsive Product</Link>
      </li>
      <li>
        <Link href="/recipe-page">Recipe Page</Link>
      </li>
      <li>
        <Link href="/social-links">Social Links</Link>
      </li>
      <li>
        <Link href="/blog-preview-card">Blog Preview Card</Link>
      </li>
    </ul>
  )
}
 
export default Home