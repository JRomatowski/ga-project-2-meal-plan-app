
## Website Link

https://jromatowski-project-2.netlify.app/

## Photos of Website

# ![](/choices-photo-1.png)
# ![](/choices-photo-2.png)

## Project Description

Welcome to my random recipe website, "CHOICES"! The purpose of this project is to provide random food recipes (to cook) at the click of a button.  I decided to make this website because I personally am struggling with trying to eat out less and I wanted to try and expand the types of meals I was preparing at home. Being overwhelmed by the choices, I felt that something like this, an application that makes the decisions for me, would help me succeed!

## Technologies Used

I wrote this website using React.  Also, I used the following API:

https://www.themealdb.com/api.php

<!-- ## Struggles

- When I had the useEffect, the image from the link would render twice.  I fixed this by removing the strict router tag from the index.js.

- kept trying to use useEffect to fire on button click, decided to just use an onClick and then make a handleClick function, repeating the fetch code.  Is this the only way?  Not DRY.

- when trying to use the cocktail API (old idea), I kept getting back SyntaxError: Unexpected token < in JSON at position 0.  This was because the fetch url didn't have https:// in front of it.

- Getting rid of the broken link icon that appears while images are loading.  I found a solution on stack overflow, where you set state for "loading" and initialState to "true", and then you have a div designated as an "image container" for the image you are working on.  You set style on the image container to hide while loading state is true, and show while loading state is false. >>style={{visibility: loading ? "hidden" : "visible"}}<<. <br><br>
To set loading state to false they put a for loop in the fetch that uses a React hook called useRef, and then compares some number value from the fetched data, creates a condition for that comparison to return false or true, and then the loading state is set to false, then displaying the image container div on the page.  This effectively removes the unsightly broken link icon, but there is still a delay in the image loading.  I do not know why this works.  There is a more advanced method of image loading, "lazy loading" or using a placeholder image, but it seemed too advanced for now so coming back later.

- If you don't put your fetch in a useEffect it will loop forever.

- In my Categories.js, the entire thing wasn't working because I put a "{" instead of a "(" after the arrow function.

- I completely misunderstood how "return" worked in fetch's.  I was not passing data down correctly, and then was getting *very* confused about why the console.log's I were using weren't using

- I learned that a background should be a solid color, because the styling gets messed up if you have to scroll at all.  

- I learned the best solution for blank space is to put in content.

- The JS I had to use to display recipe ingredients and ingredient amounts took me a minute to figure out.  

## Stretch Goals

- Media Queries to make the desktop version better
- I would like to switch API's to one that includes nutritional information, such as calories and macros.  
- Looking for a way to format the "cooking instruction" paragraph.  As of now it's being pulled out of the API, so there's no way to format the block of text to be more accessible.
- I would like to be able to search foods by category. Doing this with the current API is possible, but I was not able to complete this feature by the project deadline. -->