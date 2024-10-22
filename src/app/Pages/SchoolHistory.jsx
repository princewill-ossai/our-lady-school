import "../styles/schoolHistory.css";
import Header from "../Pages/Header.jsx";
import Footer from "../Pages/Footer";

const SchoolHistory = () => {
  return (
    <div>
      <Header />
      <div className="bg-image">
        <h1 className="text-white text-5xl font-bold py-32">School History</h1>
      </div>
      <div className='histroy-text'>
        <h2 className='text-3xl py-5'>School History</h2>
        <p>
          Our Lady of Apostle Secondary School (OLASS), Yaba Lagos started by
          the beginning of the Second half of the twentieth century, when the
          Catholic Mission realised the need to establish a girl’s Secondary
          School on the Mainland area of Lagos. 
        </p>
        <p>
          The institution is one of the beneficiaries of the Missionary sisters
          of Our Lady of Apostles; A congregation whose mission is “The Training
          of the Girl Child, women and Children”
        </p>
        <p>
          This women missionary congregation was founded in 1876 by very Rev.
          Fr. Augustine Planque, SMA, the first superior General of the society
          of the African Mission (SMA Fathers).
        </p>
        <p>
          The sisters arrived Nigeria few years after formation and launched
          into education of women and children establishing schools, domestic
          centers and hospitals with Our Lady Of Apostles being one of them.
        </p>
        <p>
          The Institution was established on the 23rd of January 1956 with an
          intake of thirty Female students only.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SchoolHistory;
