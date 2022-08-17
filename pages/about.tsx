
import Link from 'next/link'
import { DarkLayout } from '../components/layout/DarkLayout'
import { MainLayout } from '../components/layout/MainLayout'


export default function AboutPage() {
    return (

        <>
            <h1 className={'title'}>
                {/* Ir al <a href="/">Home</a> */}
                Ir al <Link href='/'>Home</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/about.jsx</code>
            </p>
        </>
    )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}