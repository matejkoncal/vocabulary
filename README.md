<p align="center">
  <img src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/96/external-readme-is-a-easy-to-build-a-developer-hub-that-adapts-to-the-user-logo-regular-tal-revivo.png" width="100" />
</p>
<p align="center">
    <h1 align="center">VOCABULARY</h1>
</p>
<p align="center">
    <em>Boost Your Words, Build Your World with Vocabulary</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/matejkoncal/vocabulary?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/matejkoncal/vocabulary?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/matejkoncal/vocabulary?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/matejkoncal/vocabulary?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Firebase-FFCA28.svg?style=flat&logo=Firebase&logoColor=black" alt="Firebase">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Sass-CC6699.svg?style=flat&logo=Sass&logoColor=white" alt="Sass">
	<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
	<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&logo=Jest&logoColor=white" alt="Jest">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<br>
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=flat&logo=ts-node&logoColor=white" alt="tsnode">
	<img src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=flat&logo=GitHub-Actions&logoColor=white" alt="GitHub%20Actions">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## Quick Links

> - [ Overview](#overview)
> - [ Features](#features)
> - [ Repository Structure](#repository-structure)
> - [ Modules](#modules)
> - [ Getting Started](#getting-started)
>   - [ Installation](#installation)
>   - [ Running vocabulary](#running-vocabulary)
>   - [ Tests](#tests)
> - [ Project Roadmap](#project-roadmap)
> - [ Contributing](#contributing)
> - [ License](#license)
> - [ Acknowledgments](#acknowledgments)

---

## Overview

Vocabulary is an efficient language learning aid designed to expand one's vocabulary in a foreign language. Built on the Vite environment and React framework, with strict TypeScript rules, it ensures robustness and performance.

---

## Features

|     | Feature          | Description                                                                                                   |
| --- | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture** | Utilizes React for UI development. Supports TypeScript and JavaScript. Customized build config with Vite.     |
| 🔩  | **Code Quality** | Uses TypeScript ensuring type safety. Adopts ESLint for linting. Enforces strict mode & prevents unused vars. |
| 🧩  | **Modularity**   | Via React, the project is stratified into individual components promoting reusability and clean code.         |
| 🧪  | **Testing**      | Implements the Jest and @testing-library/react frameworks for testing. Includes a custom Jest setup.          |
| ⚡️ | **Performance**  | Leverages Vite for fast builds and HMR, ensuring quick reloads and an optimum dev experience.                 |
| 📦  | **Dependencies** | Key dependencies: React, Vite, TypeScript, @emotion/styled, Firebase, Jest, GitHub Actions.                   |

---

## Repository Structure

```sh
└── vocabulary/
    ├── README.md
    ├── firebase.json
    ├── index.html
    ├── jest.config.js
    ├── jest.setup.ts
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── favicon.ico
    ├── src
    │   ├── App.scss
    │   ├── App.spec.tsx
    │   ├── App.tsx
    │   ├── assets
    │   │   ├── carbon.svg
    │   │   ├── carbonLight.svg
    │   │   └── react.svg
    │   ├── asyncTextFileReader
    │   │   ├── asyncTextFileReader.spec.ts
    │   │   └── asyncTextFileReader.ts
    │   ├── card
    │   │   ├── card.spec.tsx
    │   │   └── card.tsx
    │   ├── carsPlayer
    │   │   ├── cardsPlayer.spec.tsx
    │   │   └── cardsPlayer.tsx
    │   ├── firebaseFunctions.ts
    │   ├── index.css
    │   ├── main.tsx
    │   ├── selectFileButton
    │   │   ├── selectFileButton.spec.tsx
    │   │   └── selectFileButton.tsx
    │   ├── sourceSelector
    │   │   ├── sourceSelector.spec.tsx
    │   │   └── sourceSelector.tsx
    │   ├── utils
    │   │   ├── utils.spec.ts
    │   │   └── utils.ts
    │   └── vite-env.d.ts
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

---

## Modules

<details closed><summary>.</summary>

| File                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [jest.setup.ts](https://github.com/matejkoncal/vocabulary/blob/master/jest.setup.ts)           | The `jest.setup.ts` file is an integral part of the repository's testing framework setup. By importing @testing-library/jest-dom, it enables the use of custom jest matchers from the jest-dom library. This enhances the testing functionality for DOM elements within the application's components, aiding in more robust and efficient unit testing.                                                                                                                                               |
| [tsconfig.json](https://github.com/matejkoncal/vocabulary/blob/master/tsconfig.json)           | The `tsconfig.json` file is central to the TypeScript configuration for the application. It sets the compiler options, enabling ES2020, DOM and class field definitions, while defining module characteristics including resolution mode and extension handling. It also establishes strict linting rules, avoids redundant or unused variables, and prevents emit process. Importantly, it exclusively includes files within src directory for compilation and also references `tsconfig.node.json`. |
| [index.html](https://github.com/matejkoncal/vocabulary/blob/master/index.html)                 | The `index.html` file in the repository is the main HTML document of the Vocabulary application. It's the entry point that sets up the application environment with essential meta-tags, links to icons, and provides a mounting point (`#root`) for the React app to render its components. It also directly imports the main `main.tsx` script file for execution.                                                                                                                                  |
| [vite.config.ts](https://github.com/matejkoncal/vocabulary/blob/master/vite.config.ts)         | The vite.config.ts file in the vocabulary repository plays a key role in configuring Vite, the build tool. Primarily, it applies the @vitejs/plugin-react, enabling Vite to support React framework applications. This aids in maintaining the rapid development speed, module replacement, and optimized build process required by the application.                                                                                                                                                  |
| [package.json](https://github.com/matejkoncal/vocabulary/blob/master/package.json)             | This snippet provides an overview of a vocabulary-focused repository. It incorporates Firebase workflows, unit testing with Jest, and UI development using React and SCSS. The Directory src houses application logic, styles, and assets. The asyncTextFileReader submodule notably handles asynchronous text file reading, likely contributing to vocabulary data management.                                                                                                                       |
| [firebase.json](https://github.com/matejkoncal/vocabulary/blob/master/firebase.json)           | This `firebase.json` file configures Firebase Hosting for the repository. It sets dist folder as the public directory and instructs Firebase to ignore certain paths, such as the config itself, any hidden files, and the node_modules directory, during deployment. This helps in efficiently delivering the necessary static files to constitute the hosted web application.                                                                                                                       |
| [tsconfig.node.json](https://github.com/matejkoncal/vocabulary/blob/master/tsconfig.node.json) | This tsconfig.node.json file in the repository configures settings for TypeScript compilation. It essentially directs the typescript compiler to include the vite.config.ts file, with specific options such as enabling strict data type checking and allowing synthetic default imports, amongst others.                                                                                                                                                                                            |
| [jest.config.js](https://github.com/matejkoncal/vocabulary/blob/master/jest.config.js)         | The `jest.config.js` is the configuration file for Jest, a JavaScript testing tool used in this repository. It sets up the testing environment, transformations, name mapping for specific file types, and the test initialization file. It enables TypeScript support for Jest tests and ensures proper test setup.                                                                                                                                                                                  |
| [package-lock.json](https://github.com/matejkoncal/vocabulary/blob/master/package-lock.json)   | This code provides a glimpse into a vocabulary-based web application. It is set up with the ability to run automated workflows for both merge and pull request scenarios utilizing Firebase. It also includes Jest for performing tests, Node packaging, and an HTML entry point.                                                                                                                                                                                                                     |

</details>

<details closed><summary>src</summary>

| File                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [App.scss](https://github.com/matejkoncal/vocabulary/blob/master/src/App.scss)                         | The provided code snippet is part of the App.scss file in the src directory of the repository. This file contains the core styling for the application, ensuring a viewport-wide width for the root element and setting the HTML and body attributes to fill the screen entirely with no margins or padding. It plays a critical role in setting up the overall layout and ensuring the consistent look and feel of the application.                                                                                |
| [main.tsx](https://github.com/matejkoncal/vocabulary/blob/master/src/main.tsx)                         | This code is the main entry point of a React application placed in the src directory. It imports and renders the App component into a DOM element with the id root, effectively initializing the web app and its functionalities.                                                                                                                                                                                                                                                                                   |
| [vite-env.d.ts](https://github.com/matejkoncal/vocabulary/blob/master/src/vite-env.d.ts)               | The vite-env.d.ts file in this repository is primarily for including typings for Vite.js specific capabilities while building the application. This supports in-editor autocomplete and type checking for Vite-specific modules, improving app development and debugging efficiency.                                                                                                                                                                                                                                |
| [App.tsx](https://github.com/matejkoncal/vocabulary/blob/master/src/App.tsx)                           | This repository hosts a vocabulary practice application. Central features include the ability to select source files for vocabulary loading and display through the SelectFileButton and SourceSelector components. Vocabulary is fetched using an asynchronous text file reader. Each vocabulary item is presented as a card, powered by the Card and CardsPlayer components. Firebase integration enables hosting and potential interaction with a backend. Testing is facilitated through Jest.                  |
| [index.css](https://github.com/matejkoncal/vocabulary/blob/master/src/index.css)                       | The `index.css` file is a central part of the repository, hosting global styles for elements like root, body, headers, links, and buttons. It controls everything from font styles to color schemes, supporting both light and dark mode, thereby influencing the repository's overall aesthetic. The media query adaptively changes styles based on the user's preferred color scheme to improve UI responsiveness. The file's location in `src` indicates its impact on the source code and thus user interfaces. |
| [firebaseFunctions.ts](https://github.com/matejkoncal/vocabulary/blob/master/src/firebaseFunctions.ts) | The `firebaseFunctions.ts` file is vital to the vocabulary repository's architecture. It primarily communicates with Firebase to access data related to language vocabulary. The function `getVocabularySourceByAI` retrieves vocabulary data based on two languages and a topic and parses this data into a usable format (`CardSource[]`). This forms a foundation for the AI-driven flashcards function of the application.                                                                                      |
| [App.spec.tsx](https://github.com/matejkoncal/vocabulary/blob/master/src/App.spec.tsx)                 | The code snippet represents testing parameters for the main application component (App) of a vocabulary learning platform. It covers two primary aspects: verifying the rendering of a specific button and testing the functionality of card rendering based on file upload. It mocks certain functions such as the window media matcher and firebase functions to simulate behavior and validate outcomes.                                                                                                         |

</details>

<details closed><summary>src.utils</summary>

| File                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [utils.ts](https://github.com/matejkoncal/vocabulary/blob/master/src/utils/utils.ts)           | This code, located in utils.ts within the utils subdirectory, provides crucial utility functions for the vocabulary repository. It defines a CardSource interface and includes functions for parsing a sourced file into this format and downloading a vocabulary.txt file. This bolsters the app's capability to manipulate vocabulary data, streamlining the process for users to upload and download vocabulary files, and contributing to this app's core functionality. |
| [utils.spec.ts](https://github.com/matejkoncal/vocabulary/blob/master/src/utils/utils.spec.ts) | This code snippet is a test suite for the parseSourcedFile utility function embedded in the larger application. The function, as validated by the tests, processes input text files, parsing entries into an organized format irrespective of line endings or empty lines. This is integral for ensuring consistent, clean data preparation across different source files in the application.                                                                                |

</details>

<details closed><summary>src.carsPlayer</summary>

| File                                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [cardsPlayer.tsx](https://github.com/matejkoncal/vocabulary/blob/master/src/carsPlayer/cardsPlayer.tsx)           | The `cardsPlayer.tsx` creates a CardsPlayer component that allows cycling through a set of cards from a given source. It uses a state to keep track of the currently selected card and provides Previous and Next buttons for navigation. It plays a crucial role in the user interface of the Vocabulary application by providing the card interaction functionality. |
| [cardsPlayer.spec.tsx](https://github.com/matejkoncal/vocabulary/blob/master/src/carsPlayer/cardsPlayer.spec.tsx) | This code forms the base of a vocabulary-learning web application. Significant aspects include hosting on Firebase, react components like card and cardsPlayer, and functionalities like asynchronous text file reading. It also contains configurations for testing with Jest.                                                                                        |

</details>

<details closed><summary>src.sourceSelector</summary>

| File                                                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [sourceSelector.tsx](https://github.com/matejkoncal/vocabulary/blob/master/src/sourceSelector/sourceSelector.tsx)           | The codebase facilitates the deployment and testing of a vocabulary learning app that integrates with Firebase. The app contains functionalities like async text file reading, rendered through components such as card and cardsPlayer, allowing users to select their vocabulary source files. Workflow configurations for Firebase ensure CI/CD pipelines for the service.                                                                                               |
| [sourceSelector.spec.tsx](https://github.com/matejkoncal/vocabulary/blob/master/src/sourceSelector/sourceSelector.spec.tsx) | The sourceSelector.spec.tsx file contains the unit tests for the SourceSelector component in the vocabulary learning application. The tests ensure that the source selection dialog behaves as expected, triggering specific events when certain actions are performed, such as clicking the AI or Generate button, or changing input fields. These tests help ensure the functionality and reliability of the AI-based vocabulary source generation and selection process. |

</details>

<details closed><summary>src.asyncTextFileReader</summary>

| File                                                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [asyncTextFileReader.ts](https://github.com/matejkoncal/vocabulary/blob/master/src/asyncTextFileReader/asyncTextFileReader.ts)           | This code snippet is from `asyncTextFileReader.ts`, located in the `src` directory of the repository. It defines a class `AsyncTextFileReader` that asynchronously reads text files. The class's key feature is its `read` method, which employs Promises to read files and handle potential errors. This component plays a crucial role in the repository's structure, serving as a utility for other modules that process file inputs. |
| [asyncTextFileReader.spec.ts](https://github.com/matejkoncal/vocabulary/blob/master/src/asyncTextFileReader/asyncTextFileReader.spec.ts) | The code snippet from the file `asyncTextFileReader.spec.ts` is responsible for unit testing the `asyncTextFileReader` module in the application. It verifies whether the function correctly reads a file and returns its content, and also checks its error resilience when reading a file fails. This functionality is crucial for the robustness of file handling operations in the repository's larger architecture.                 |

</details>

<details closed><summary>src.selectFileButton</summary>

| File                                                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [selectFileButton.spec.tsx](https://github.com/matejkoncal/vocabulary/blob/master/src/selectFileButton/selectFileButton.spec.tsx) | This code is a test suite for the SelectFileButton component in a vocabulary learning application. It verifies the component's ability to select a file and trigger an onFileSelected event correctly. The tests ensure both the button click action and the subsequent file upload process work as expected, contributing to the application's seamless vocabulary source file selection features. |
| [selectFileButton.tsx](https://github.com/matejkoncal/vocabulary/blob/master/src/selectFileButton/selectFileButton.tsx)           | This code snippet belongs to the selectFileButton.tsx file in the src directory of the repository. It's a React component that provides a UI for users to upload a file. The input file changes are handled by the onFileSelected function, passed as a prop, with the selected file as an argument. This component plays a crucial role in user interactions concerning file uploads.              |

</details>

<details closed><summary>src.card</summary>

| File                                                                                          | Summary                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [card.spec.tsx](https://github.com/matejkoncal/vocabulary/blob/master/src/card/card.spec.tsx) | The card.spec.tsx file is a part of the test suite in this repository, specifically handling unit testing for the Card component in the src/card directory. It verifies the successful rendering of both the top and bottom parts of the Card component, ensuring these elements display the correct text. Thus, it contributes essential verification for the user interface in the project's overall architecture. |
| [card.tsx](https://github.com/matejkoncal/vocabulary/blob/master/src/card/card.tsx)           | The `card.tsx` file, part of the `src` directory, houses the Card component of the application. This component holds two pieces of content, top and bottom, and it enables a flip interaction between the two. Within the repository's architecture, this component serves to provide an interactive, visual representation of data to the user.                                                                     |

</details>

---

## Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **TypeScript**: `version x.y.z`

### Installation

1. Clone the vocabulary repository:

```sh
git clone https://github.com/matejkoncal/vocabulary
```

2. Change to the project directory:

```sh
cd vocabulary
```

3. Install the dependencies:

```sh
npm install
```

### Running vocabulary

Use the following command to run vocabulary:

```sh
npm run dev
```

### Tests

To execute tests, run:

```sh
npm run test
```

---

## Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/matejkoncal/vocabulary/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/matejkoncal/vocabulary/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/matejkoncal/vocabulary/issues)**: Submit bugs found or log feature requests for Vocabulary.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/matejkoncal/vocabulary
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---
