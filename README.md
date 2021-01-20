# amanda_website
Day One
Mobile Formatting
[x] create general format.
    --> Giant flexbox, direction in columns.
[x] make navbar.
    --> put a div to width of 100%. Made it a 
      flexbox. Space-between to split logo and dropdown 
      menu. Fixed position, top 0. This makes it stay
      when scrolling.
[x] make landing page.
    --> 100vh, slap an image in the back with the correct
        formatting. Make the display flex to shift the strip
        to the end (right). Make the strip a flex, column, to push words to flex end (bottom). Adjust height of strip to position words.
[x] make second page
    [x] add depth with a white box plus a box shadow. 
        the white "modal". 
    [x] add a logo and content onto the modal.
    [x] make button at the bottom of modal
Day Two
[x] make dropdown button function
    --> I am attempting to create an overlay field first. The
        navabar needs to remain on top so i set the z-index of
        the navbar to 2. The overlay is a transparent purple block sitting on top of the main tag. The drop down menu 
        slides into the page with a css transition and some javascript. I learned that qurery selector can be uses with classList.toggle to turn on classes and not turn off other classes. the first child css method is a good way to add multiple calsses to one place.
[x] make color page link work
    --> I used the template of the landing page to build this one. I used a 
        different flexbox on the home page to fit the color color color text.
        The white modal is the same as the home page, same css name. Be careful
        when editing one and not the other. Now i need to push it off the screen and slide it back in when the colors link is clicked.
[] make link and form for the ibe button 