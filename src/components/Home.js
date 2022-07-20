import '../App.css'
import catImage from "./cat-photo-resized.jpeg"

function Home() {
    return(
        <>  
            <div id='home-screen-container'> 
                <section id='home-screen-text'>
                    <h2 id='home-title-text'>CHOICES</h2>
                    <h3 id='home-title-text-two'>(are hard)</h3>
                    <p id='blurb'>I often find myself wondering what to cook for the day.  When given the choice I seem to always get the same things.  I hoped to solve this problem by creating this website.  By clicking on the recipe button above you will have access to hundreds of recipes to try.  The algorithm sends you randomly chosen recipe.</p>
                </section>
                <img src={catImage} alt='cat'></img>
            </div>
        </>
    )
}

export default Home