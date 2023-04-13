# AI-Highlighted-Summarizer

AI-Highlighted-Summarizer is a Chrome extension that enables users to highlight text on webpages and receive AI-generated summaries. It is built using React, TypeScript, Tailwind CSS, CSS Modules, NestJS, and MongoDB.

This README provides step-by-step instructions on how to clone and run the app on your Chrome browser.

## Prerequisites

Before you begin, ensure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/download/) (version 12 or higher)
- [npm](https://www.npmjs.com/get-npm) (usually included with Node.js)
- [Git](https://git-scm.com/downloads)
- [Google Chrome](https://www.google.com/chrome/) (latest version)

You will also need to have the server running locally on its default port (8090) - [https://github.com/kingsleykbc/ai-highlight-summarizer-server](https://github.com/kingsleykbc/ai-highlight-summarizer-server)

## Clone the Repository

1.  Open a terminal or command prompt.
2.  Navigate to the directory where you want to clone the repository.
3.  Run the following command to clone the repository:

bashCopy code

`git clone https://github.com/your-username/AI-Highlighted-Summarizer.git`

Replace `your-username` with your GitHub username, or use the correct URL if the repository is under an organization or different username.

## Install Dependencies

1.  Navigate to the root directory of the cloned project:
    `cd AI-Highlighted-Summarizer`

2.  Install the required dependencies by running:
    `npm install`

## Build the Extension

1.  Build the extension by running:
    `npm run build`

This command will generate an updated `content.js` file in the `extension` folder in the project root directory.

## Load the Extension in Chrome

1.  Open Google Chrome.
2.  Click on the three-dot menu in the upper-right corner and navigate to **More tools** > **Extensions**.
3.  Enable **Developer mode** by toggling the switch in the upper-right corner of the Extensions page.
4.  Click on the **Load unpacked** button.
5.  In the file picker dialog, navigate to the `extension` folder generated earlier in the project root directory, and click **Select Folder** (or **Open**).

The AI-Highlighted-Summarizer extension should now be loaded in your Chrome browser, and you should see its icon next to the address bar. Click on the icon to open the popup and start using the extension!

### Alternatively

You can run the code with `npm start`, to have it run as a normal app on an HTML page
