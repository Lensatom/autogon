import { useState } from 'react'
import { Button, Container, Typography } from '../../../components'
import { Footer } from '../../../Layouts/Footer'
import { Header } from '../../../Layouts/Header'

const DemoRequestForm = () => {

  const [cred, setCred] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: ''
  })

  const sendRequest = (e:any) => {
    e.preventDefault()
    const subject = `
      Autogon Demo Request From ${cred.firstName}
    `
    const body = `Hello Autogon. My name is ${cred.firstName} ${cred.lastName}. I am curious about your product and so I am requesting for a demo because of the reason below:%0A%0A "${cred.reason}"%0A%0A You can contact me on ${cred.phone}.%0A -${cred.email}`
    window.open(`mailto:info@autogon.ai?subject=${subject}&body=${body}`);
  }

  return (
    <>
      <Header />
      <Container className='bg-screen'>
        <Typography
          variant='header'
          className='pt-28 lg:pt-44 text-center font-warp !font-normal'
        >Demo Request Form</Typography>
        <Typography
          variant='body'
          className='lg:px-[20%] text-center'
        >
          Hello there! Thanks for your interest in Autogon. You are one step away from getting a demo.
          Kindly fill the form below to notify us of your interest. Thank you.
        </Typography>
        <form onSubmit={sendRequest} className='py-10 grid lg:grid-cols-2 lg:px-[20%] gap-5'>
          <div>
            <label>First name</label>
            <input required value={cred.firstName} onChange={(e) => setCred({...cred, firstName:e.target.value})} className='w-full bg-gray-100 rounded-md p-2' />
          </div>  
          <div>
            <label>Last name</label>
            <input required value={cred.lastName} onChange={(e) => setCred({...cred, lastName:e.target.value})} className='w-full bg-gray-100 rounded-md p-2' />
          </div>
          <div>
            <label>Phone number</label>
            <input required type='tel' value={cred.phone} onChange={(e) => setCred({...cred, phone:e.target.value})} className='w-full bg-gray-100 rounded-md p-2' />
          </div>
          <div>
            <label>Email address</label>
            <input required type='email' value={cred.email} onChange={(e) => setCred({...cred, email:e.target.value})} className='w-full bg-gray-100 rounded-md p-2' />
          </div>
          <div className='col-span-2'>
            <label>Why do you want a demo?</label>
            <textarea required value={cred.reason} onChange={(e) => setCred({...cred, reason:e.target.value})} className='w-full bg-gray-100 rounded-md p-2 h-24' placeholder='Reason(s) here'></textarea>
          </div>
          <div></div>
          <Button type='submit'>Submit</Button>
        </form>
      </Container>
      <Footer />
    </>
  )
}

export default DemoRequestForm