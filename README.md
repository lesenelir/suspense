# suspense 

Data fetching with React Suspense Component.


### 3 ways to fetch data in React

- Render, and then fetch

- Fetch, and then render
  - fetch early, get a response early

- Render as you fetch
  - Initiate Data Fetching: Start fetching data before rendering UI.
  - Initiate Rendering: Begin rendering immediately without waiting for data to complete.
  - Suspense for handling loading state: render a fallback before the data is prepared.
  - Render Final UI: Once the data is ready, complete the component's rendering.

