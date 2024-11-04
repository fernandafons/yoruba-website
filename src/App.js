
import imageBahia from './assets/Screenshot 2024-11-04 at 17.51.36.png'
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body className='body'>
        <view className='quote'>
          <p>
          “A Perception is always followed by a response, even if it is only an attempt to hide the perception. Dance improvisation, 
          however, attempts to reveal that response-to seek a spontaneous and coherent movement response to perceptions. 
          When that happens, we dance;” (Hodes S., 1998)
          </p>
        </view>
        <p className='regular-text'>
        Non-verbal communication is a powerful form of expression that conveys meaning beyond words. It includes body language, 
        facial expressions, gestures, posture, eye contact, and even physical distance. These non-verbal cues often communicate 
        emotions and intentions more effectively than spoken language, shaping interactions in profound ways. Dance as a form of
        non-verbal communication can foster interaction and connection between humans or even deities. The later is the case in
        many afro-latin dances.
        </p>
        <view className='text-image'>
          <view>
          <p className='quote'>
          "Communication is a kind of social interaction. It is an empirically proven fact that communication could not be invented by
          a singular living agent for one time only once. Communication needs signs to communicate context-relevant content. Such signs
          can be combined in a line-up to sign sequences. The use of signs needs some competence to combine sign sequences correctly. This competence 
          of rule-following depends on social interaction experience (context)."
          </p>
          <p className='regular-text'>
          In various cultures, dance holds a significant place. Today, Afro-Cuban dances, which were brought 
          to Cuba by enslaved individuals from Yorubaland (Nigeria, Togo, and Benin) and shaped under Spanish colonial and Catholic influences, 
          are practiced by people from diverse backgrounds worldwide. The global popularity of salsa—a genre that originated in New York through 
          the fusion of Latin rhythms, particularly Cuban ones—has been instrumental in spreading these dance styles.

          Today, dance is often enjoyed for leisure, socialization, and fun, especially in social dance forms like salsa, merengue, or bachata. 
          In these dances, non-verbal communication comes into play, as two people who may have never met can move in seamless harmony. Through 
          shared knowledge of the rhythm, lyrics, and familiar cues, their movements seem choreographed, despite their improvisation. For many 
          cultures, however, dance goes beyond social interaction. Afro-Cuban and Afro-Brazilian dances, in particular, serve as powerful means 
          of connecting with deities, narrating stories about them, and visually representing the orishas they revere. This project will explore 
          these aspects, focusing especially on Afro-Cuban dance as a profound form of non-verbal cultural expression and spirituality.
          </p>
          </view>
            <img src={imageBahia} style={{width: '502px', height: '329px'}} />
        </view>
      </body>
    </div>
  );
}

export default App;
