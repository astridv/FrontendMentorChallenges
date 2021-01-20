# Frontend Mentor - Testimonials grid section (Flexbox, CSS Grid, BEM)

![Design preview for the Testimonials grid section coding challenge](./design/desktop-preview.jpg)

## ¡Hola! 👋

This is a responsive testimonial grid section made with HTML and CSS. I decided to test out BEM notation for the first time in this challenge. Obviously, it is not exactly necessary to employ BEM in such a small project, however, I found it a nice way to try it out! See more on that below if you're interested. Check out the live solution here: https://av-frontendmentor-challenges.vercel.app/testimonials-grid-section/index.html

## The challenge

Your challenge is to build out this testimonials grid section and get it looking as close to the design as possible.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size

## BEM (Block Element Modifier)
The BEM methodology is a naming convention for classes in HTML and CSS. The purpose of BEM is to make the relationship between HTML and CSS clearer and to make reusable components. Your classes (we want to avoid using IDs as they are supposed to be reusable) will either be blocks, elements or modifiers. 

### Blocks
Standalone components that make sense on their own and can be reused. The block name describes what is is (e.g. a button) and not what it looks like or its state (e.g. pink or small). So as my HTML consists of several cards I made the card into a block: 
`<article class="card">`

### Elements 
An element has no meaning on its own without a block, but its name also describes a purpose. The structure looks like this: `block-name__element-name`. I therefore gave my card heading the following class: 
`class = card__heading`

### Modifiers
The modifier is used to change the appearance, behaviour or state of a block. In this design there were cards with different colour schemes, so I created a modifier for each color. E.g. `card--purple`, `card--gray` and so on. 

## Browser compability 
## Accessibility


## The design
The provided design can be found inside the `/design` folder. There is also a `style-guide.md` file, which contains information about color palette and fonts.
