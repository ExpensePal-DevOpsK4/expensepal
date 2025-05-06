Expense Pal
===========

**Expense Pal** is an application designed to help users track and manage their expenses in an efficient and user-friendly way. The application allows users to record, categorize, and analyze their daily expenditures to help manage their finances.

Features
--------

-   **Add Expense**: Allows users to add new expenses with details like amount, category, and date.

-   **View Expenses**: Users can view their expenses in a list format and filter them by categories, date, or amount.

-   **Expense Categories**: Organize expenses into various categories like Food, Transportation, Entertainment, etc.

-   **Monthly Reports**: Track and analyze monthly spending habits with a summary of all expenses.

Tech Stack
----------

-   **Frontend**: (Replace with your tech stack, e.g., React with Vite, etc.)

-   **Backend**: Node.js, Express.js

-   **Database**: MongoDB (Mongoose)

-   **Testing**: Jest (for backend and frontend unit tests)

-   **Deployment**: AWS EC2 (for hosting backend and frontend)

-   **CI/CD Pipeline**: Jenkins

Deployment
----------

The **Expense Pal** app is hosted on [AWS EC2](https://aws.amazon.com/ec2/). You can access the live version of the app at:

**<http://13.50.15.123>**


Installation
------------

### Prerequisites

-   Node.js (v14 or higher)

-   MongoDB (locally or MongoDB Atlas for cloud)

-   Yarn or npm

### Setup

1.  Clone the repository:

    bash


    `git clone https://github.com/your-username/expense-pal.git
    cd expense-pal`

2.  Install dependencies:

    bash


    `npm install`

3.  Set up environment variables:

    -   Create a `.env` file in the root directory with the following:

        `MONGODB_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        PORT=your_preferred_port`

4.  Run the application:

    bash

    `npm start`

### Testing

To run tests:

bash

`npm test`

Usage
-----

1.  **Add an Expense**: Navigate to the "Add Expense" page, fill in the details, and submit.

2.  **View Expenses**: View the list of added expenses, filter by date or category, and see the total for each month.

3.  **Reports**: Check the summary of all expenses in the "Reports" section.

Contributing
------------

1.  Fork the repository.

2.  Create your branch (`git checkout -b feature-name`).

3.  Commit your changes (`git commit -a -m 'Add new feature'`).

4.  Push to the branch (`git push origin feature-name`).

5.  Create a new Pull Request.
