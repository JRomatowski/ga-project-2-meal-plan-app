## Struggles

When I had the useEffect, the image from the link would render twice.  I fixed this by removing the strict router tag from the index.js

kept trying to use useEffect to fire on button click, decided to just use an onClick and then make a handleClick function, repeating the fetch code.  Is this the only way?  Not DRY.

when trying to use the cocktail API, I kept getting back SyntaxError: Unexpected token < in JSON at position 0.  This was because the link didn't have http:// in front of it.