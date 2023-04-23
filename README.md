# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./screenshot.png)

### Links

- [Solution]()
- [Live site](https://www.stephenyu2018.github.io/stats-preview-card-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Fluid layout
- [TailwindCSS](https://www.tailwindcss.com/) - CSS Utility Framework

### What I learned

I learned how to use the CSS functions `min()` and `clamp()` in TailwindCSS to create fluid layouts that will work with all screen sizes. Both functions take multiple CSS size measurements, so by giving the function a preferred responsive measurement and an upper/lower bound fixed measurement, a fluid layout is created.

`min()` will use the smaller of two CSS size measurements. For example, let's say the `width` of a `<div>` element is `min(25vw, 400px)`. This means that the `width` of the `<div>` element is the smaller of `25vw` or `400px`, which depends on the viewport width because of the first given measurement. So when the viewport width is `800px`, then `25vw = 200px <= 400px`, so the `width` of the `<div>` is `200px`. If the viewport width is `2000px`, then `25vw = 500px >= 400px`, so the `width` of the `<div>` is `400px`. As the viewport width increases from this point onwards, the size of the `<div>` element remains `400px`. `min()` becomes useful when you need a responsive size measurement, but only up to a maximum fixed size measurement.

`clamp()` takes three CSS size measurements: a lower-bound value, a preferred value and an upper-bound value. For example, let's say the `width` of another `<div>` element is `clamp(200px, 25vw, 400px)`. This means that the `width` of the `<div>` element is the smaller of `25vw` or `400px`, which depends on the viewport width because of the first given measurement. So when the viewport width is `800px`, then `25vw = 200px`, which we have `200px <= 200px <= 400px`, so the `width` of the `<div>` is `200px`. If the viewport width is `2000px`, then `25vw = 500px >= 400px`, so the `width` of the `<div>` is `400px`. As the viewport width increases from this point onwards, the size of the `<div>` element remains `400px`. And if the viewport width is `400px`, then `25vw = 100px <= 200px`, so the `width` of the `<div>` is `200px`. As the viewport width decreases from this point onwards, the size of the `<div>` element remains `200px`. `clamp()` is similar, but also uses the responsive size measurement down to another minimum fixed size measurement.

I couldn't get it to work in TailwindCSS before because I needed to have `_` after the comma separating the two measurements. Let's say we have this vanilla CSS code:

```html
<div style="width: clamp(2rem, 33%, 5rem);"></div>
```

In TailwindCSS, we would have `<div class="w-[clamp(2rem,_33%,_5rem)]"></div>`. It's the same for using any CSS multi-argument functions as arbitrary values.

### Continued development

I want to continue perfecting fluid layouts and planning size measurements just from observing the image. I also had trouble giving the image a violet color overlay. Despite CSS having filters, they are difficult to work with if I want the image to be overlayed with a specific color. The best I could do was to use `:before` the `<picture>` element to represent the color overlay, then use CSS filters to adjust it. It's definitely not perfect, but guessing the correct color values for the image overlay was an impossible and time-wasting task.

### Useful resources

- [TailwindCSS Docs: Using arbitrary values](https://www.tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) - This helped me figure out why CSS functions like `min()` and `clamp()` didn't work as TailwindCSS arbitrary values

## Author

- Frontend Mentor - [@StephenYu2018](https://www.frontendmentor.io/profile/StephenYu2018)

