import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import { NextPageWithLayout } from './page'

const NEW: NextPageWithLayout = () => {
  return (
    <>
      <section className='flex min-w-full justify-center '>
        <p className='text-2xl px-2'>create new contract</p>
      </section>
    </>
  )
}

export default NEW

NEW.getLayout = (page) => {
  return (
    <PrimaryLayout pageTitle='Simply IOU'>
      {page}
    </PrimaryLayout>
  )
}
