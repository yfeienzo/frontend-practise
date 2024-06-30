import Link from 'next/link'
 
function Home() {
  return (
    <ul>
      <li>
        <Link href="/recipe-page">Recipe Page</Link>
      </li>
      <li>
        <Link href="/responsive-product">Responsive Product</Link>
      </li>
    </ul>
  )
}
 
export default Home