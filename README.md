# amanda_website
Day One - 1-7-2021
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
[x] make extension page link work
    [x] build extensions page in seperate html
    [x] make seperate css
    [x] build page
        [x] white modal build
        [x] image modal wrapped inside, set to absolute positioning
        [x] title strip will be the same
        [x] repeat for the fusion method, but flip positioning
    [x] set extension button to href="extensions.html"
    [x] switch the extensions button to a home link to go back to index
[x] make learn more button link to extension page
[x] create portfolio page
    [x] new html, copy over navagation bar and import css
    [x] want a 2x2 flex grid. main is the column and divs 
        are rows with 2 divs inserted who have background-image
        properties set.
    [x] organize images in file with "hair(gridtag)" ie 
        haira1.jpg haira2.jpg.
    [x] make a js function that inserts images into grid.
        [x] make array of all images and then use a for loop
            with += 2 to loop over array. arr[i] and arr[i+1]
            will inject into a prebuilt dom. 
    [x] make all dropdown links function
[] make adjustments to page style
    [] invisible bead extensions is not the right size. Bigger
    [] images on safari doesnt work. I think class declaring is
        not compatible. Check es6.
[x] make mock up for color pages
    [x] used a css perspective and transform combo to make the cards flip on click. Took some javascript.
[x] contact page, basic html and css. 
[x] optimize all images. 
[x] add color pallete

