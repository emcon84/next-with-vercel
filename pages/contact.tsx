
import Link from 'next/link'
import { MainLayout } from '../components/layout/MainLayout'



export default function Contact() {
  return (
    <MainLayout>
      <h1 className={'title'}>
        {/* Ir a <a href="/about">About</a>*/}
        Ir a <Link href='/'>Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/contacto.js</code>
      </p>
    </MainLayout>
  )
}
