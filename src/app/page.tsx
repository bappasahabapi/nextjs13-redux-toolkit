
import Link from 'next/link'
import Counter from './components/Counter'
import Counter1 from './components/Counter1'

export default function Home() {
  return (
   <main>
    <h1>This is main layout page</h1>
    <Link href='/json-user'>json-user</Link>
    <Counter/>
    <Counter1/>
   </main>
  )
}
