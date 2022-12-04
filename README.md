# Defuzzy Interview Question

## Injecting React into existing project

#### Running the existing code
With Python3.11 installed or in a virtual environment, run
```shell
pip install -r requirements.txt
```

Then, from within the directory hosting `manage.py`, run
```shell
./manage.py runserver
```

#### Problem statement
In this project, you have an exsiting django project that uses Django HTML templates and JavaScript (no frameworks)
to fill/hydrate an HTML page from an API

The objective of the problem is to replicate the existing page with the following restrictions:

1. The page should render an empty div and mount a React Component
2. Use React from CDN: 
 ```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
3. The component must use JSX or TSX, TSX preferred.
4. Do not load babel from CDN. For example, including
```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

```
Is NOT ALLOWED. You are required to add the necessary infrastructure (npm/webpack/babel scripts) to pre-process jsx/tsx files into JavaScript/css and place them
into the `react_interview/static/pages` directory.

5. Bonus points: Use [MUI Data Grid](https://mui.com/x/react-data-grid/) to display the data from the API

#### Restrictions
* Do not use ReactRouter
* Do not use `Promise` syntax, only `async`/`await`
#### Reasoning behind the problem
This problem is aimed at ensuring the candidate has the skills needed for the project.
The project uses Django to create an API and render basic HTML templates, and want to shy away
from creating a single-page-application (SPA) that uses React Router. Each page is initially rendered by the backend, and
react components should mount afterwards.

This allows us to continue to easily use secure cookies for authentication, removes the need for CORS,
and allows for better CSRF protection.

