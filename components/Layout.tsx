import Image from 'next/image'
import { ReactNode, VFC } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

interface Props {
  children: ReactNode
  title: string

}

export const Layout: VFC<Props> = ({
                                     children,
                                     title = 'Welcome to Nextjs'
                                   }) => {
  return (
    <div className={'flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono'}>
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main className={'flex flex-1 flex-col justify-center items-center w-screen'}>{children}</main>
      <footer className={'w-full h-12 flex justify-center items-center border-r'}>
        <a
          className={'flex items-center'}
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
        </a>
      </footer>
    </div>
  )
}