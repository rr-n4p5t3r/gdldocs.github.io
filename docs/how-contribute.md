# Welcome aboard and let's get started

## First of all

This section contains crucial information for contributing to our project. We encourage you to actively participate in and ask any questions you may have. Your cooperation in following these guidelines is greatly appreciated. Please read through it carefully and feel free to join on [Discord](https://discord.gg/hHfpgt3M).

> Important: This documentation is generated using Docsify, a simple and flexible documentation generator. You can find out more about Docsify on their official website: https://docsify.js.org/

## Quick Steps for contribute

1. Fork the official Goldendog Linux Documentation [Repository](https://github.com/gdldocs/gdldocs.github.io). _(if you dont know how, go to: [here](how-to-fork.md))_
2. Add your file.md, please ensure you put in the correct directory for lenguage. [Folder structure](how-contribute.md#Folder-Structure)
3. Please enter in the _sidebar.md the path corresponding to the newly created file, ensuring it matches the correct language. __Please make sure you comply with this step or your inclusion may not be accepted.__
4. Create a new pull request, and wait for it to be reviewed and approved. _(More details at: [here](how-to-fork.md#inital-steps))_

## Aditional Information

### Folders Structure

The current folder structure is outlined below. Please adhere to this structure. Any proposed restructuring must be justified and will be subject to review. Paths are generated from these directories, hence the importance of maintaining this structure for the simplicity of documentation paths.

```
    gdldocs.github.io
    ├── docs/
    │   ├── es/ (Spanish Documentation)
    │   │   ├── _sidebar.md (Sidebar for Spanish Documentation)
    │   │   └── *.md (All documentation files in Spanish with .md extension)
    │   ├── _sidebar.md (Sidebar for English Documentation)
    │   └── *.md (All documentation files in English with .md extension)
    └── scripts/ (Scripts Folder)

    Last Upload: 7/30/2024
```


### Siderbar.md File

In simpler terms, the _sidebar.md file is like a table of contents or a navigation menu for your Docsify documentation. It defines the structure of your documentation and helps visitors easily navigate between different pages.

```
    # _sidebar.md

    - Introduction
        - What is GoldenDog Linux?
        - Getting started
    - Guides
        - Basic usage
        - Advanced features
```

> Note: Each indented item under a superior item will be contained by the leftmost one, and will be displayed when clicking on the container. Example: Introduction contains whats is Docsify section, and is visible only when you click in Introduction item.

### Plugins

Docsify plugins are small pieces of code that extend the functionality of Docsify, allowing you to customize and enhance your documentation site. They can add new features, modify existing behavior, or integrate with other services.

This documentation uses:

* Search Text Plugin
* Docsify Darklight Theme
* Docsify Sidebar Collapse

Last upload: 7/30/2024

### Docsify-cli to local server

Use Docsify's command-line interface to start a local server and view the documentation page.

1. If you dont have, Install Node.js and npm:

    You can download and install Node.js from the official website: [Node](https://nodejs.org/) 
    > note: npm is usually bundled with Node.js.

2. Use with npm:

``` 
    npm install docsify-cli -g
```

> This globally installs the Docsify CLI dependency, allowing for local development server viewing.


3. Inside the directory path, execute the following command in your terminal:

```
    docsify serve docs
```

> Go to **localhost:3000** here is the local documentation page view.