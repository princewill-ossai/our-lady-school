import Header from "./Header"
import Footer from "./Footer"
import '../styles/hostelapplication.css'

const HostelApplication = () => {
  return (
    <div>
        <Header />
        <div className="bg-image">
        <h1 className="text-white text-5xl font-bold py-32">Hostel Application</h1>
      </div>
      <div className='content-div'>
        <h3>Hostel Application Form</h3>
        <p>
        The offer of provisional admission into the College does not imply automatic placement in the school Hostel.  Thus, prospective Boarding Student is to obtain the hostel Application Form from the school bookshop, fill it and undergo an interview. We are encouraged to take advantage of the Hostel facilities existent in <span>OLASS Yaba.</span>
        </p>
      </div>
        <Footer />
    </div>
  )
}

export default HostelApplication