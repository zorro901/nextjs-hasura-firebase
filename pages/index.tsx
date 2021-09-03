import type { NextPage } from 'next'
import { Auth } from '../components/auth'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title={'Home'}>
      <Auth/>
    </Layout>
  )
}

export default Home
