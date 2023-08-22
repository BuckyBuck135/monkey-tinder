# Clare's questions
1)    Feedback on Monkey Tinder project including the good, bad and ugly.
2)    The layout of the monkey tinder project and the best way to ensure that all images are rendered  the same size. To discuss the use of height, max-height and vh
3)    Why the buttons continue to show a hover effect even though the monkey image changes
4)    The final image of the liked monkey does not always display as the right size. How can I fix this?
5)    The use of position relative and absolute and the best way to manage the badge position on large screens where the max-width of the body is exceeded. 
6)    Formatting and indentation of code
7)    The use of arrow functions. What is the best practice in industry? Should I be trying to write all functions as arrow functions? Is it possible to convert all functions into arrow functions as I experienced lots of error messages whilst trying to do this?
8)    Is it a good idea to have a separate CSS file for media queries?
9)    Breakpoints – how to decide what breakpoint to use in media queries?



2) You can use height and width HTML attributes, or CSS aspect-ratio (this is actually recommended by Lighthouse audits to avoid layout shift)
Unfortunately, it doesn't seem to work on this project. I suspect it's because the images are dynamically rendered by JS, and the script requries laoding time too.
More info: https://jakearchibald.com/2022/img-aspect-ratio/ 
If you work on a site with a lot of images, the best is to resize them so they have the same size / aspect ratio. And it's a good opportunity to also: compress and convert to webp. For extra optimization (way outside the scope of the course), we can use the <picture> tag
<picture>
    <source media="(max-width: 600px)" srcset="/assets/images/cabinets2-m.jpg">
    <source media="(min-width: 601px)" srcset="/assets/images/cabinets2.jpg">
    <img decoding="async" src="/assets/images/cabinets2.jpg" alt="kitchen cabinets" loading="eager" width="2500" height="1667">
</picture>

height / max-height / vh => I never use vh - max-height  ; I use min-height a lot, for example to ensure a minimum size for dynamic content
Great video: https://www.youtube.com/watch?v=SjYYfd7obug

HTML markup: main / section

3) This bug only seems to happen on devtools? No issues on "normal" mode
by the way: .btn-reject-focus => :focus

4) I cannot replicate this bug. Displays fine with 3 6 or 12 monkeys
However: .summary needs a min-height (the bg-color stops when only a few monkeys)

5) your badges should be children of the container they are positionned in (i.e. inside monkey-container)
Also, hide them by default with CSS, not JS 

6) Apart from the standard indentation of children, I don't think there are rules (have you heard of the space v. tab debate? :D), just personal preferences
e.g.. I like to place my template literal backticks above and under my html string (so I'm sure I haven't forgotten them)
`
    <div class="monkey-container">
        <div class="img-container">
            <img src="${avatar}" class="monkey-img" id="monkey-img" alt="monkey image with their name and bio">
        </div>
        <div class="monkey-info">
            <h1 class="monkey-name">${name}, ${age}</h1>
            <p class="monkey-bio">${bio}</p>
        </div>
    </div>
`;

I like spaces before/after CSS declarations, JS functions

7) I don't know enough about the industry to answer 
I personally don't use them because I don't like how they look. (as least the const function = () => {})
I use them in callback functions though ( when applicable) See example in index.js

8) yes, if project demands it (in your case, yes)

9) Super in-depth article: https://blog.logrocket.com/css-breakpoints-responsive-design/

The Bootstrap standard:
Breakpoint	Dimensions
X-Small	< 576px
Small	≥ 576px
* Medium	≥ 768px 
Large	≥ 992px
* Extra large	≥ 1200px
Extra extra large	≥ 1400px

Then, you might need a specific MQ depening on your project and content. Does the design break at some point? Is it because of bad CSS or could a MQ help?


1) Feedback on the app
## What you've done well
- use of class constructor
- very sound and clear getNewMonkey
- stretch goals: end screen
- thinking of accessibility with aria labels, :focus
- responsive

## What could be improved
- folders: data should be separate; Monkey.js as it's a class
- UX: make whole button clickable 
- UX: sizes => max-width too wide => font-sizes too big
- JS
[] clean up console.logs before sending to production
[] repeated getNewMonkey in handleSwipe
[] refactor handleLikedMonkeyClick() with data attributes
[] could reorganize endPage() : create all your variables / loops, then create a html create, then append it