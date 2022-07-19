## Trello

https://trello.com/invite/b/YxCnhoeu/e4836f5ece61cf8ab70134866d4d21a5/jromatowski-project-2-food-suggestion

## Struggles

- When I had the useEffect, the image from the link would render twice.  I fixed this by removing the strict router tag from the index.js.

- kept trying to use useEffect to fire on button click, decided to just use an onClick and then make a handleClick function, repeating the fetch code.  Is this the only way?  Not DRY.

- when trying to use the cocktail API (old idea), I kept getting back SyntaxError: Unexpected token < in JSON at position 0.  This was because the fetch url didn't have https:// in front of it.

- Getting rid of the broken link icon that appears while images are loading.  I found a solution on stack overflow, where you set state for "loading" and initialState to "true", and then you have a div designated as an "image container" for the image you are working on.  You set style on the image container to hide while loading state is true, and show while loading state is false. >>style={{visibility: loading ? "hidden" : "visible"}}<<. 

To set loading state to false they put a for loop in the fetch that uses a React hook called useRef, and then compares some number value from the fetched data, creates a condition for that comparison to return false or true, and then the loading state is set to false, then displaying the image container div on the page.  This effectively removes the unsightly broken link icon, but there is still a delay in the image loading.  I do not know why this works.  There is a more advanced method of image loading, "lazy loading" or using a placeholder image, but it seemed too advanced for now so coming back later.

- If you don't put your fetch in a useEffect it will loop forever.