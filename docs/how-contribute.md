### How to contribute to Documentation

1.  Fork the official Goldendog Linux Documentation [Repository](https://github.com/gdldocs/gdldocs.github.io).
2.  Add your file.md, please ensure you put in the correct directory (by language).
3.  Please enter in the _sidebar.md the path corresponding to the newly created file.
4.  Create a new pull request, and wait for it to be reviewed and approved.

**Thanks to contribute!**

# Quick Guide: How to fork and contribute to the project

## Initial steps

1. Open your terminal.
2. Navigate to the directory where you want to clone the repository.
3. Execute the following command:

   ``` bash
   git clone --recursive https://github.com/YOUR_USERNAME/gdldocs.github.io
   ```

   > **Note**: Replace `YOUR_USERNAME` with your GitHub username.

4. Git will clone the main repository and all its submodules.

## Create a new branch

5. Create a new branch with the following command:

   ``` bash
   git branch name-of-new-branch
   ```

   For older Git versions, use:

   ``` bash
   git checkout -b name-of-new-branch
   ```

   > **Note**: Creating a new branch facilitates updates, simplifies pull requests, and separates changes, making it easier to review and manage them.

## Make changes and create a Pull Request

6. Make your changes and commits on this new branch.
7. Push the new branch to your fork:

   ``` bash
   git push origin name-of-new-branch
   ```

8. Once finished, create a Pull Request from the branch created in your fork to the original repository.

## Suggestions for branch and commit names

1. Use descriptive prefixes:
   - `docs` for documentation
   - `fix` for corrections
2. Use hyphens to separate words:
   - `add-docs`
   - `fix-memory`
3. For commits, explain the "what" and "why", not the "how".

If you need additional support, you can visit the Discord channel for help.