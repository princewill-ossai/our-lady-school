import Header from './Header'
import Footer from './Footer'
import '../styles/improvement.css'

const Improvement = () => {
  return (
    <div>
        <Header />
        <div className='container'>
        <div className='table-heading'>
          <p>Area of Developement</p>
          <p>WHERE WE ARE</p>
          <p>WHERE WE ARE GOING</p>
          <p>HOW WE GET THERE </p>
          <p>HOW WE KNOW WE ARE THERE</p>
        </div>
          <img src='https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729497045/pjyyvjeo7un1gwi8j3l4.png' alt='' width='1000' />
        </div>
        <Footer />
    </div>
  )
}

export default Improvement