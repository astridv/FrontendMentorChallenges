# Frontend Mentor - Interaticve pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. This challenge I explored and learned about accessible toggle buttons and sliders. Check it out here: [Add live site URL here](https://your-live-site-url.com)

## Tabe of Contents
- [Frontend Mentor - Interaticve pricing component solution](#frontend-mentor---interaticve-pricing-component-solution)
  - [Tabe of Contents](#tabe-of-contents)
  - [Overview](#overview)
    - [The Challenge](#the-challenge)
    - [Screenshots](#screenshots)
    - [Links](#links)
  - [My Process](#my-process)
    - [Built with](#built-with)
    - [Accessibility](#accessibility)
    - [What I learned](#what-i-learned)
      - [Toggle Button (Switch)](#toggle-button-switch)
      - [Slider (Range input)](#slider-range-input)
    - [Useful Resources](#useful-resources)
  - [Acknowledgements](#acknowledgements)
    - [Code Snippets](#code-snippets)
      - [Accessible Toggle Button (Switch) with radio buttons](#accessible-toggle-button-switch-with-radio-buttons)
      - [Visually Hidden Component](#visually-hidden-component)
## Overview
### The Challenge
Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers
### Screenshots
![](./screenshot.jpg)

### Links
- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My Process
### Built with
* Semantic HTML5 markup
* Grid & Flexbox
* Dash of JavaScript
* Mobile-first workflow 

### Accessibility 
### What I learned
The key part of this challenge (for me at least) was the toggle switch and the slider. That is why I want to write up some of what I learned so I can use it for future reference. 

#### Toggle Button (Switch)
The toggle switch can be recreated for web through checkboxes, radio buttons or even a button. Normally, it's associated with toggling something (e.g. a setting or dark mode) on or off. You accordingly only have one label associated with it. If this was the case then it makes sense to use the ```chexbox``` element to represent it. 

In this design, however, you had two labels: "*Monthly Billing*" and "*Yearly Billing*". The user can toggle between these two billing options. I therefore felt it would be more fitting with two radio boxes as in reality the user has two options and has to select on of them. 

I definitely recommend checking out this write up on the topic by Sara Souedian: https://www.sarasoueidan.com/blog/toggle-switch-design/


#### Slider (Range input)
So the thing that is *a bit of a pain* with the range input is that there a lot of inconsistencies in browser behaviour. 

### Useful Resources
## Acknowledgements
### Code Snippets

#### Accessible Toggle Button (Switch) with radio buttons
I adapted my code for the toggle switch from the example provided in Sara's aforementioned article. Check it out here: https://codepen.io/SaraSoueidan/full/jpBbrq

#### Visually Hidden Component
While easy, using ```display: none```to hide content on the page can be problematic for users relying on screen readers (especially if said content contains content which are relevant to them). See [this article](https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/) for more information if you're interested. 

In this project, I'm using the snippet below (provided by the A11Y Project) to hide the label on my slider component as I want the info to be available, but not show on the page. 

```
.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```


https://stackoverflow.com/questions/18389224/how-to-style-html5-range-input-to-have-different-color-before-and-after-slider