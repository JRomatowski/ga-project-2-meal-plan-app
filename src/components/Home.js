import '../App.css'
import catImage from "./cat-photo-resized.jpeg"

function Home() {
    return(
        <>  
            <div id='home-screen-container'> 
                <section id='home-screen-text'>
                    <h2 id='home-title-text'>CHOICES</h2>
                    <h3 id='home-title-text-two'>(are hard)</h3>
                    <p id='blurb'>Often, we enjoy microwaving the golden standards or ordering out from our tried and true local family restaurants.  CRISIS.  The internet is out and you forgot to charge your phone! What now?</p>

                    <p>With haste, go to your closest neighbor, borrow their phone or computer, and visit this website!</p>

                    <p>Our proprietary world-class algorithm will suggest a random recipe for you to easily cook over an open flame!</p>

                    <p>Grab one your nearby flammable favorites, ignite that fire, and start creating memories!</p>
                </section>
                <img src={catImage} alt='cat'></img>
            </div>
        </>
    )
}

export default Home