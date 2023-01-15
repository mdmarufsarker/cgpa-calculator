import Head from 'next/head'
import Layout from '../layout/layout'
import Calculator from '../components/calculator'

export default function Home() {
  return (
    <>
      <Layout>
        <Calculator />
      </Layout>
    </>
  )
}
