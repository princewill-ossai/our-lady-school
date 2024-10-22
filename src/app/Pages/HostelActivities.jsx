import Header from "./Header"
import Footer from "./Footer"
import '../styles/timetable.css'

const TimeTable = () => {
  return (
    <div>
        <Header />
        <div className='p-9'>
            <h2>Hostel Activities</h2>
        </div>
        <div class='container'>
            <img src='https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729513769/no-file-or-document-still-empty-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector_1_gelpjr.png' alt='no event' />
            <p>No event hours available</p>
        </div>
        <Footer />
    </div>
  )
}

export default TimeTable