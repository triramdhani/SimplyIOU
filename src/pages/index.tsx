import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import {  useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => {
  const [lastContractId, setLastContractId] = useState('')
  const Router = useRouter()
  useEffect(() => {
    const value = localStorage.getItem("lastContractId") 
    if (typeof value === 'string') {
        const parseItem = JSON.parse(value) // ok
        setLastContractId(parseItem)
    }
  }, []);
  
  if(lastContractId !== '' ){
    setTimeout(() => {
      Router.push(`/${lastContractId}`)
    }, 1000);
    return (
      <div>Loading.....</div>
    )
  }
  return (
    <>
      <section className='flex min-w-full justify-center '>
        <p className='text-2xl px-2'>next js starter by tri</p>
      </section>
    </>
  )
}

export default Home

Home.getLayout = (page) => {
  return (
    <PrimaryLayout pageTitle='Simply IOU'>
      {page}
    </PrimaryLayout>
  )
}
