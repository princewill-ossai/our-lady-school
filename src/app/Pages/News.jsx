import Footer from "./Footer";
import Header from "./Header";
import "../styles/news.css";

const News = () => {
  return (
    <div>
      <Header />
      <h1 className='text-2xl font-extrabold text-black text-start px-20 pt-10'>News</h1>
      <div className="container">
        <div>
          <div className="news-container">
            <p>05.25.24 | Leave comment</p>
            <h1>OLASS ACHIEVERS</h1>
            <p>
              The 2023/2024 JOINT ADMISSIONS AND MATRICULATION BOARD
              (JAMB) Examination View Below the List of Extraordinary
              Performances of Our Students and be Proud of OLASS, Yaba The OLASS
              Girls have done it again and will continue to do it.  O—L—A! Great
              Achievers!Winning Schools! Proudly OLASS
            </p>
            <button>Learn More &rarr;</button>
          </div>
          <div className="news-container">
            <p>05.25.24 | Leave comment</p>
            <h1>
              LIST OF SUCCESSFUL CANDIDATES FOR THE SUPPLEMENTARY INTERVIEW
              EXAMINATION INTO JSS ONE 2024/2025 ACADEMIC SESSION
            </h1>
            <p>
              S/N NAMES 1 AGBOOLA RACHEAL MOYINOLUWA 2 AMINU FAREEDAH GBEMISOLA
              3 AREJI MMESOMA JULIET 4 ASOGWA IFECHUKWU SYLVIA 5 AWOSANYA
              TITILAYO 6 BABATUNDE NAOMI INIOLUWA 7 CHIKELU-ANIDIOBI CHINAGOROM
              JULIA 8 DURU AMANDA CHISOM 9 EZECHUKWU CHIZITEREM KAREN 10
              EZEKANNAGHA CHIDIMMA JOY 11 EZEKWERE FECHI MIRABEL 12 EZIRIM
              MATILDA CHIMAMANDA 13 IHEMENA SERAPHINA ONYINYECHI 14 ISIDAHOMEN
            </p>
            <button>Learn More &rarr;</button>
          </div>
          <div className="news-container">
            <p>05.25.24 | Leave comment</p>
            <h1>
              LIST OF SUCCESSFUL CANDIDATES FOR THE SUPPLEMENTARY COMMON
              ENTRANCE EXAM HELD ON SATURDAY, APRIL 27, 2024
            </h1>
            <p>
              ATTENTION! The parents of the following candidates are to attend
              the interview at OUR LADY OF APOSTLES SECONDARY SCHOOL, YABA, for
              the 2024/2025 academic session on May 11, 2024, with the following
              documents: Parents (father and mother) or guardians must accompany
              their children or wards, as they will also be interviewed. The
              interview will be conducted on a first-come,
            </p>
            <button>Learn More &rarr;</button>
          </div>
          <div className="news-container">
            <p>05.25.24 | Leave comment</p>
            <h1>2024 COMMON ENTRANCE EXAMINATION RESULT</h1>
            <p>
              List of Successful Candidates for the Common Entrance Examination
              Held on 9th March, 2024 ANNOUNCEMENT!!! THE PARENTS OF THE
              FOLLOWING CANDIDATES ARE TO ATTEND THE INTERVIEW INTO OUR LADY OF
              APOSTLES SECONDARY SCHOOL, YABA FOR THE 2023/2024 ACADEMIC SESSION
              ON THE 16TH OF MARCH, 2024 WITH THE FOLLOWING DOCUMENTS: 1. BIRTH
              CERTIFICATE II. SCHOOL TESTIMONIAL
            </p>
            <button>Learn More &rarr;</button>
          </div>
        </div>
        <div className='recent-news-container'>
          <div className='recent-top'></div>
          <h3>Recent Posts</h3>
          <div className='recent-flex'>
            <div>
              <span><i>05.25.24</i></span>
              <p>OLASS ACHIEVERS</p>
            </div>
            <div>
              <span><i>05.25.24</i></span>
              <p>
                LIST OF SUCCESSFUL CANDIDATES FOR THE SUPPLEMENTARY INTERVIEW
                EXAMINATION INTO JSS ONE 2024/2025 ACADEMIC SESSION
              </p>
            </div>
            <div>
              <span><i>05.25.24</i></span>
              <p>
                LIST OF SUCCESSFUL CANDIDATES FOR THE SUPPLEMENTARY COMMON
                ENTRANCE EXAM HELD ON SATURDAY, APRIL 27, 2024
              </p>
            </div>
            <div>
              <span><i>05.25.24</i></span>
              <p>2024 COMMON ENTRANCE EXAMINATION RESULT</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
