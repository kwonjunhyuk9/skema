# Dancing With Life

### Description

**Dancing With Life** is a web project designed to explore various topics and technologies in web development. 
The project includes sections such as HTML, CSS, JavaScript, React, Next, Built in objects, API integrations, and more.

### TODO

- charCodeAt
- fromChaCode
- [...array]
- [arr[i], arr[j]] = [arr[j], arr[i]]
- Use React
- Use Next
- Use JSON database
- Languages
- Themes
- Breadcrumb navigation
- Split navigation
- Pagination
- Cards
- Lazy registration
- Infinite scroll
- Modal dialogs
- Progressive disclosure
- Progress indication
- Shopping cart

### Author

- Phone: 010-5855-1427
- Email: [kwonjunhyuk9@icloud.com](mailto:kwonjunhyuk9@icloud.com)
- LinkedIn: [Kwon Jun Hyuk](https://www.linkedin.com/in/jun-hyuk-kwon-3a9551355/)
- JobKorea: [Kwon Jun Hyuk](https://www.jobkorea.co.kr/user/mypage)


<!--<h2>Class</h2>-->
<!--<h3>Declaration</h3>-->
<!--<article>-->
<!--    <section></section>-->
<!--    <pre><code>class Person {-->
<!--  name;-->
<!--  constructor(name) {-->
<!--    this.name = name;-->
<!--  }-->
<!--  introduceSelf() {-->
<!--    console.log(`Hi! I'm ${this.name}`);-->
<!--  }-->
<!--}-->
<!--const giles = new Person("Giles");</code></pre>-->
<!--</article>-->
<!--<h3>Inheritance</h3>-->
<!--<article>-->
<!--    <section></section>-->
<!--    <pre><code>class Professor extends Person {-->
<!--  teaches;-->
<!--  constructor(name, teaches) {-->
<!--    super(name);-->
<!--    this.teaches = teaches;-->
<!--  }-->
<!--  introduceSelf() {-->
<!--    console.log(-->
<!--      `My name is ${this.name}, and I will be your ${this.teaches} professor.`,-->
<!--    );-->
<!--  }-->
<!--  grade(paper) {-->
<!--    const grade = Math.floor(Math.random() * (5 - 1) + 1);-->
<!--    console.log(grade);-->
<!--  }-->
<!--}-->
<!--const walsh = new Professor("Walsh", "Psychology");</code></pre>-->
<!--</article>-->
<!--<h3>Encapsulation</h3>-->
<!--<article>-->
<!--    <section></section>-->
<!--    <pre><code>class Student extends Person {-->
<!--  #year;-->
<!--  constructor(name, year) {-->
<!--    super(name);-->
<!--    this.#year = year;-->
<!--  }-->
<!--  #introduceSelf() {-->
<!--    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);-->
<!--  }-->
<!--  canStudyArchery() {-->
<!--    return this.#year > 1;-->
<!--  }-->
<!--}-->
<!--const summers = new Student("Summers", 2);</code></pre>-->
<!--</article>-->



<!--function fetchData() {-->
<!--return fetch('https://jsonplaceholder.typicode.com/todos/1')-->
<!--.then(response => response.json())-->
<!--.then(data => {-->
<!--console.log('First fetch:', data);-->
<!--return fetch('https://jsonplaceholder.typicode.com/todos/2');-->
<!--})-->
<!--.then(response => response.json())-->
<!--.then(data => {-->
<!--console.log('Second fetch:', data);-->
<!--})-->
<!--.catch(error => {-->
<!--console.error('Error:', error);-->
<!--});-->
<!--}-->
<!--fetchData();-->

<!--async function fetchData() {-->
<!--try {-->
<!--let response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');-->
<!--let data1 = await response1.json();-->
<!--console.log('First fetch:', data1);-->

<!--let response2 = await fetch('https://jsonplaceholder.typicode.com/todos/2');-->
<!--let data2 = await response2.json();-->
<!--console.log('Second fetch:', data2);-->
<!--} catch (error) {-->
<!--console.error('Error:', error);-->
<!--}-->
<!--}-->
<!--fetchData();-->










<!--    <h2>Document</h2>-->
<!--    <h3>Navigation</h3>-->
<!--    <article>-->
<!--        <section></section>-->
<!--        <pre><code>parentNode-->
<!--childNode-->
<!--firstChild-->
<!--lastChild-->
<!--previousSibling-->
<!--nextSibling</code></pre>-->
<!--    </article>-->
<!--    <h3>Selection</h3>-->
<!--    <article>-->
<!--        <section></section>-->
<!--        <pre><code>getElementById-->
<!--getElementsByClassName-->
<!--getElementsByTagName-->
<!--querySelector-->
<!--querySelectorAll</code></pre>-->
<!--    </article>-->

<!--    <h2>Event</h2>-->
<!--    <h3>Creating and Removing Events</h3>-->
<!--    <article>-->
<!--        <section></section>-->
<!--        <pre><code>addEventListener-->
<!--removeEventListener</code></pre>-->
<!--    </article>-->
<!--    <h3>Mouse Events</h3>-->
<!--    <article>-->
<!--        <section></section>-->
<!--        <pre><code>click-->
<!--mouseover-->
<!--mouseout</code></pre>-->
<!--    </article>-->
<!--    <h3>Event Properties</h3>-->
<!--    <article>-->
<!--        <section></section>-->
<!--        <pre><code>onclick-->
<!--onmouseover-->
<!--onmouseout</code></pre>-->
<!--    </article>-->
<!--    <h3>Event Object</h3>-->
<!--    <article>-->
<!--        <section></section>-->
<!--        <pre><code>e-->
<!--evt-->
<!--event</code></pre>-->
<!--    </article>-->
<!--    <h3>Event Delegation</h3>-->
<!--    <article>-->
<!--        <section></section>-->
<!--        <pre><code>Connect to child elements</code></pre>-->
<!--    </article>-->
<!--    <h3>Event Bubbling</h3>-->
<!--    <article>-->
<!--        <section></section>-->
<!--        <pre><code>stopPropagation</code></pre>-->
<!--    </article>-->
<!--    <h3>Event Capturing</h3>-->
<!--    <article>-->
<!--        <section></section>-->
<!--        <pre><code>Reverse order of bubbling</code></pre>-->
<!--    </article>-->
<!--    <h3>Other Event Related</h3>-->
<!--    <article>-->
<!--        <section></section>-->
<!--        <pre><code>preventDefault-->
<!--stopPropagation-->
<!--stopImmediatePropagation-->
<!--target-->
<!--currentTarget-->
<!--bubblingPhase-->
<!--capturePhase</code></pre>-->
<!--    </article>-->