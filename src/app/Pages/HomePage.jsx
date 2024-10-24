import Link from "next/link";
import "../styles/header.css";
import Header from "./Header";
import Footer from "./Footer";

const index = () => {
  return (
    <>
    <Header/>
      <section>
        <div className="hero-section">
          <div className="hero-logo">
            <img
              src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729259391/tup63k7q3dslqnpei3iy.png"
              alt="school-logo"
              width="200"
            />
            <h1 className="text-white font-bold text-4xl pt-14">
              Our Lady <br /> Apostles Secondary School
            </h1>
          </div>
        </div>
        <div className="description text-white">
          <p>
            You are welcome to our lady of apostle secondary school, Yaba,
            Lagos. Olass Yaba, is an all girls school known for it'a moral and
            academic excellence with a note worthy reputation for high
            performance standatds.
          </p>
        </div>
        <div className="about-school bg-teal-200 py-12 px-10">
          <div>
            <div className="top-desc-color"></div>
            <div>
              <h2>Our History</h2>
              <p>
                Our Lady of Apostle Secondary School (OLASS), Yaba Lagos started
                by the beginning of the Second half of the twentieth century,
                when the Catholic Mission realised the need to establish a
                girl’s Secondary School on the Mainland area of Lagos. 
              </p>
              <Link legacyBehavior href="SchoolHistory.jsx">
                <button>Learn More &rarr;</button>
              </Link>
            </div>
          </div>
          <div>
            <div className="top-desc-color color-b"></div>
            <div className="box-2">
              <h2>Admission</h2>
              <p>
                Admission forms into OLASS, Yaba,  as a “fresh
                Student” (JS1) can be obtained from any of the 10  Archdieocesan
                Catholic Mission Schools, Parishes and Olassyaba bookshop.
                Transfer Student (JS2 and SS1), can purchase forms only
                from OLASS Yaba bookshop.
              </p>
              <button>Learn More &rarr;</button>
            </div>
          </div>
          <div>
            <div className="top-desc-color color-c"></div>
            <div className="box-3">
              <h2>PTA Forum</h2>
              <p>
                Parents are advised to join the telegram group for more updates 
              </p>
              <button>Join Telegram &rarr;</button>
            </div>
          </div>
        </div>
        <div className="jamb-top-score">
          <div className="bg-gray-100"></div>
          <img
            src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729258359/jpm6nmqlrh2oaermw1o0.png"
            alt="2024 JAMB top scores"
            width="1000"
          />
        </div>
        <div className="recent-news sm:grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <span>
              <i>o4.24.25</i>
            </span>
            <h3 className="font-extrabold">OLASS ACHIEVERS</h3>
            <p className="font-bold text-slate-400 text-sm py-4">
              The 2023/2024 JOINT ADMISSIONS AND MATRICULATION BOARD
              (JAMB) Examination View Below the List of Extraordinary
              Performances of Our Students and be Proud of OLASS, Yaba
            </p>
            <a className="font-extrabold text-slate-600 text-sm cursor-pointer">
              Read More &rarr;
            </a>
          </div>
          <div>
            <span>
              <i>o4.24.25</i>
            </span>
            <h3 className="font-extrabold">
              SUPPLEMENTARY INTERVIEW EXAMINATION
            </h3>
            <p className="font-bold text-slate-400 text-sm py-4">
              List of successfull candidates for the supplementary interview
              examination into JSS ONE 2024/2025 ACADEMIC SESSION
            </p>
            <a className="font-extrabold text-slate-600 text-sm cursor-pointer">
              Read More &rarr;
            </a>
          </div>
          <div>
            <span>
              <i>o4.24.25</i>
            </span>
            <h3 className="font-extrabold">
              SUPPLEMENTARY COMMON ENTRANCE EXAMINATION
            </h3>
            <p className="font-bold text-slate-400 text-sm py-4">
              List of successful candidates for the supplementary common
              entrance examination held on Saturday
            </p>
            <a className="font-extrabold text-slate-600 text-sm cursor-pointer">
              Read More &rarr;
            </a>
          </div>
          <div>
            <span>
              <i>o4.24.25</i>
            </span>
            <h3 className="font-extrabold">OLASS ACHIEVERS</h3>
            <p className="font-bold text-slate-400 text-sm py-4">
              The 2023/2024 JOINT ADMISSIONS AND MATRICULATION BOARD
              (JAMB) Examination View Below the List of Extraordinary
              Performances of Our Students and be Proud of OLASS, Yaba
            </p>
            <a className="font-extrabold text-slate-600 text-sm cursor-pointer">
              Read More &rarr;
            </a>
          </div>
          <div>
            <span>
              <i>o4.24.25</i>
            </span>
            <h3 className="font-extrabold">
              SUPPLEMENTARY COMMON ENTRANCE EXAMINATION
            </h3>
            <p className="font-bold text-slate-400 text-sm py-4">
              List of successfull candidates for the supplementary interview
              examination into JSS ONE 2024/2025 ACADEMIC SESSION
            </p>
            <a className="font-extrabold text-slate-600 text-sm cursor-pointer">
              Read More &rarr;
            </a>
          </div>
          <div>
            <span>
              <i>o4.24.25</i>
            </span>
            <h3 className="font-extrabold">
              SUPPLEMENTARY INTERVIEW EXAMINATION
            </h3>
            <p className="font-bold text-slate-400 text-sm py-4">
              List of successfull candidates for the supplementary interview
              examination into JSS ONE 2024/2025 ACADEMIC SESSION
            </p>
            <a className="font-extrabold text-slate-600 text-sm cursor-pointer">
              Read More &rarr;
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default index;
