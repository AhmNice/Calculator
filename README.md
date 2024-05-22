# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents


  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)




### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](images/iPhone-11-PRO-127.0.0.1.png)![](images/iPhone-13-PRO-127.0.0.1.png) ![](images/iPhone-SE-2016-127.0.0.1.png) ![](images/Screenshot%202024-05-22%20at%2009-48-35%20Frontend%20Mentor%20Calculator%20app.png)



### Links

- Solution URL: [Add solution URL here](https://github.com/AhmNice/Calculator)
- Live Site URL: [Add live site URL here](https://ahmnice.github.io/Calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow




### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```


```js
toggleSwitch.addEventListener('click', () => {
    body.classList.remove(...modes);
    modeIndex = (modeIndex + 1) % modes.length;
    body.classList.add(modes[modeIndex]);
    toggleSwitch.classList.remove('state-1', 'state-2', 'state-3');
    toggleSwitch.classList.add(`state-${modeIndex + 1}`);
    console.log( modeIndex = (modeIndex + 1) % modes.length)
});
```
## Author

- Website - [Musa Muhammed Awwal](https://www.your-site.com)
- Frontend Mentor - [@ahm_nice](https://www.frontendmentor.io/profile/ahm_nice)
- Twitter - [@ahm_nice](https://www.twitter.com/ahm_nice)

*


