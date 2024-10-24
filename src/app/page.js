// import { Poppins } from 'next/font/google'
 
// const poppins = Poppins({
//   weight: '400',
//   subsets: ['latin'],
// })
 
// export default function MyApp({ Component, pageProps }) {
//   return (
//     <main className={poppins.className}>
//       <Component {...pageProps} />
//     </main>
//   )
// }


import Header from './Pages/Header'
// import Footer from '../app/Pages/Footer'
import HomePage from './Pages/HomePage'
// import SchoolHistory from "./Pages/SchoolHistory";
// import Improvement from './Pages/Improvement'
// import SchoolAnthem from "./Pages/SchoolAnthem";
// import HostelApplication from "./Pages/HostelApplication";
// import SubjectOffered from "./Pages/SubjectOffered";
import Form from "./Pages/Form";
// import StudentRegisteration from "./Pages/StudentRegisteration";
// import LoginForm from "./Pages/LoginForm";
// import News from "./Pages/News";

import Gallery from "./Pages/Gallery";

export default function Home() {
  return (
    <div>
    {/* <Gallery/> */}
    {/* <News /> */}
    {/* <LoginForm /> */}
    {/* <Form/> */}
    {/* <StudentRegisteration /> */}
    {/* <SubjectOffered /> */}
    {/* <HostelApplication /> */}
    {/* <SchoolAnthem /> */}
    {/* <Improvement /> */}
      {/* <Header /> */}
     <HomePage />
     {/* <Footer />  */}
     {/* <SchoolHistory /> */}
    </div>
  );
}
