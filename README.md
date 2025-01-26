#LendQR Assessment Project

This is a Next.js application with TypeScript that includes four pages: Login, Dashboard, User page, and User details page. The project requirements are as follows:

-Build the 4 pages: Login, Dashboard, User page, and User details page.
-The user pages should pull data from a mock API with 500 records.
-Use local storage or IndexedDB to store and retrieve user -details on the user details page.
-The pages must be mobile responsive.
-Some details are intentionally left out of this instruction set. The candidate should be able to spot and address them.



## Prerequisites

Make sure you have the following installed before getting started:

- [Node.js](https://nodejs.org/) (version 18+)
- [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)
In the project directory, you can run:

## Technologies
-Next.js: Framework for server-rendered React applications.
-TypeScript: JavaScript with static typing.
-Sass: CSS pre-processor for styling.
-Local Storage: For storing and retrieving user details.
-Mock API: To simulate fetching user data.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#Usage
-Login: Enter your credentials to access the dashboard.
-Dashboard: View user statistics and insights.
-Users: Browse through a list of users fetched from the mock API.
-User Details: Click on a user to view their details, stored and retrieved from local storage or IndexedDB.

#API
The mock API with 500 records is used to fetch user data. The API endpoint is defined in pages/api/mockData.ts.

#Responsive Design
The application is designed to be fully responsive, ensuring a seamless experience across mobile and desktop devices.

Storage
User details on the User Details page are stored and retrieved using local storage or IndexedDB.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



## Getting Started

Follow these steps to set up and run the project on your local environment:

### Step 1: Clone the Repository

Clone the project repository and navigate to the project directory:

```terminal
git clone https://github.com/tolubishops0/lendsqr.git
cd lendsqr
```

### **Step 2: Install Dependencies**

Install the necessary project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### **Step 3: Start the Development Server**

Run the development server to start the application locally:

```bash
npm run dev
# or
yarn start
# or
pnpm start
```


## Live Preview 
[Link](https://tolu-okunjoyo-lendsqr-fe-test.netlify.app/)