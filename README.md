# simple-slide-angularjs

<h2>TASK (Web Development)</h2>

<p>Develop a simple single page application using any client side technology of your choice. The application should consist of a Home Page and a About page. There should be navigation between the Home Page and the About Page. The application should be responsive and scale well on the most commonly used devices and screen resolutions. Add any additional sections or content to your application the will better showcase your skills.</p>

<p>The application will make use of a JSON file named {be creative}.json which you will have to create and consume in your application. The {be creative}.json files have the following content:</p>

<p>
<pre><code>{
"AboutUs": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
"Carousel": ["Slide 1", "Slide 2", "Slide 3"]
  }</code></pre>
</p>

<p>The following is what the minimum SPA should consists of for each page:</p>
<ol>
  <li>Home Page
    <ul>
      <li>Add a header to signify the home page</li>
      <li>Add a carousel that loads 3 slides from the {be creative}.json file’s Carousel array. Each slide should represent an item in the carousel array and display the array text.</li>
      <li>Add a text input and a add button which adds additional slides to the carousel by making use of the Carousel array. The text input’s text should be used as the text in the new array items.</li>
    </ul>
  </li>
  
  <li>About Page
  <ul>
    <li>Add a header to signify the about page</li>
    <li>Should display text that is being retrieved from a file called {be creative}.json through an http get request.</li>
  </ul>
  </li>
</ol>
