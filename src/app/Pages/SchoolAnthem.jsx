import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import "../styles/school-anthem.css";

const SchoolAnthem = () => {
  return (
    <div>
      <Header />
      <div className="bg-image">
        <h1 className="text-white text-5xl font-bold py-32">School Anthem </h1>
      </div>
      <div className='anthem-div'>
        <h3>Verse 1</h3>
        <p>
          Queen of Apostles O Mary we hail thee Queen and Mother of us Thou art:
          And we pour sweet praises upon thee As they rise from our loving
          hearts: When they reach thee, beyond the skies: Turn to us Thy
          merciful eyes:
        </p>
        <h3>Chorus</h3>
        <p>
          “Watch o’er Thy children, our Queen and our Mother. We to God service
          our lives have sworn” Think of us: Speak for us:  Work with us:  Plead
          for us: Queen of Apostles, dear star of the morn”
        </p>
        <h3>Verse 2</h3>
        <p>
          Queen art Thou of the shining angels: Queen art Thou of the happy
          Saints: Mother and Queen, of us Thy children: Send us help when our
          courage fails: Spotless Mother and Queen Divine: All the love of our
          hearts is Thine:
        </p>
        <h3>Chorus</h3>
        <p>
          “Watch o’er Thy children, our Queen and our Mother. We to God service
          our lives have sworn” Think of us: Speak for us:  Work with us:  Plead
          for us: Queen of Apostles, dear star of the morn”
        </p>
        <h3>Verse 3</h3>
        <p>
          Bless us with thy Holy Blessing, As we gather around Thy Throne: Lay
          Thy hand with a tender pressure On this school which is all Thine own,
          While we are here and when we are far: Light up our way dear morning
          Star:
        </p>
        <h3>Chorus</h3>
        <p>
          “Watch o’er Thy children, our Queen and our Mother. We to God service
          our lives have sworn” Think of us: Speak for us:  Work with us:  Plead
          for us: Queen of Apostles, dear star of the morn”
        </p>
        <img className='song-a' src='https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729502291/dkpfyv7xuk8gipi16fr4.png' alt='' />
        <img className='song-b' src='https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729502291/dkpfyv7xuk8gipi16fr4.png' alt='' />
      </div>
      <Footer />
    </div>
  );
};

export default SchoolAnthem;
