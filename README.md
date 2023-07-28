# Wk1-Code_Challenge

**Bank Transactions App -**

This repository contains a React web application for managing bank transactions. Users can add new transactions, view existing transactions, and search for transactions based on their description. The application uses React hooks and fetches data from a mock API to simulate the backend.

**Getting Started**

1. Clone the repository to your local machine using the following command:
   ```
   git clone <repository_url>
   ```

2. Install the required dependencies by navigating to the project directory and running:
   ```
   npm install
   ```

3. Start the development server by running:
   ```
   npm start
   ```
   The application will be accessible at http://localhost:3000 in your web browser.

**Features** 

- **Adding Transactions:** Users can add new transactions to the application by filling out the form in the "TransactionForm" component. The form includes fields for date, description, category, and amount. Upon submitting the form, the transaction will be added to the list of existing transactions.

- **Viewing Transactions:** The main application page displays a table ("TransactionList" component) that shows the date, description, category, and amount of each transaction. Transactions are fetched from the mock API when the application is loaded and displayed in this table.

- **Searching Transactions:** Users can search for specific transactions based on their description using the search bar located above the transaction table. As the user types in the search bar, the table dynamically updates to display only the transactions that match the search term.

**Usage** 

1. Add a New Transaction:
   - Click on the input fields in the "TransactionForm" component and fill out the required information.
   - The "Date" field requires a valid date in the format "YYYY-MM-DD."
   - The "Amount" field requires a valid numeric value for the transaction amount.
   - Click on the "Add Transaction" button to add the transaction to the list.

2. View Transactions:
   - All existing transactions fetched from the mock API will be displayed in the "TransactionList" table.
   - Each row of the table represents a single transaction and contains columns for date, description, category, and amount.

3. Search Transactions:
   - Use the search bar located above the transaction table to filter transactions based on their description.
   - As you type in the search bar, the table will update to show only the transactions whose description matches the search term (case-insensitive).

**Technologies Used**

Based on the code provided, the technologies used to create the app are:

1. **React**: React is a JavaScript library for building user interfaces. It is widely used for creating interactive and dynamic web applications with reusable components.

2. **React Hooks**: Hooks are functions that allow you to use state and other React features without writing a class. In the provided code, the `useState` and `useEffect` hooks are used in the functional components to manage state and handle side effects, respectively.

3. **Vite**: Vite is a build tool and development server that is designed to be fast and optimized for modern JavaScript development. It is used in the project to scaffold the React application and provide a development environment with hot module replacement.

4. **JavaScript (ES6+)**: The app is written in JavaScript using modern ECMAScript 6 (ES6) syntax, which includes features like arrow functions, template literals, object destructuring, spread operators, and more.

5. **npm**: npm (Node Package Manager) is used to manage dependencies and packages in the project. It is the default package manager for Node.js and is used to install, update, and uninstall packages required for the app.

6. **HTML**: The app includes HTML code to structure the content, define forms, and create the main application layout.

7. **CSS**: While not explicitly shown in the provided code, it is assumed that CSS styles are used to design and layout the user interface of the app.

8. **Mock API**: The app fetches transaction data from a mock API. The mock API serves predefined transaction data and simulates the behavior of a backend API to provide data for the frontend application.

Overall, these technologies work together to create a React web application that allows users to manage bank transactions, add new transactions, view existing transactions, and search for transactions based on their description. The combination of React, React hooks, Vite, and other tools provides a powerful and efficient development environment for building modern web applications.

**Data Source**

- The application fetches transaction data from a mock API. The mock API provides a predefined set of transactions with sample data, including dates, descriptions, categories, and amounts.

**Contributing**

This application is an open-source project, and contributions are welcome. If you encounter any issues or have ideas for new features, feel free to create a pull request or open an issue on the repository.

**License**

This project is licensed under the [MIT License](LICENSE). 

**Author**

The Bank Transactions App was developed by Philip Ogaye. 

