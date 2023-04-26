# Contributing

## How to Contribute

### Getting Code

Make sure that you're running on Node.js 12+ and NPM 8+, to verify and upgrade NPM, do the following:

```bash
node --version
npm --version
npm i -g npm@latest
```

### Setting Up

Now that you've ensured you're running the proper versions of Node.js & NPM, do the following:

```bash
npm install
```

### Usage

To use the components that are created in this repository, review the [component documentation](/documentation//Components.md) available.

### Code Reviews

All submissions, including submissions by project members, require review. We use GitHub pull requests for this purpose.

### Code Style

- Coding style is fully defined in the `.eslintrc` file.

To run the code linter, use:

```bash
npm run lint-fix
```

### Commit Messages

Ensure that your commit messages provide clear and concise information on the changes being made. We currently do not following a specific commit message guideline.

### Writing Documenation

When creating new components or updating current ones, you need to ensure that you are updating our current documenation accordingly. Our current documentation can be found in `ace-ux-components/documenation/Components.md` Make sure that you are updating this document with the appropriate screenshots, if necessary.

### Adding New Dependencies

For all dependencies (both installation and development):

- Do not add a dependency if the desired functionality is easily implementable.
- If adding a dependency, it should be well-maintained and trustworthy.

Additionally, these dependencies need to be approved by the Microsoft Open Source Site, which contains all the packages that are approved for use.

# Instructions for Contributing Code

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Contributing bug fixes and features

ACE-UX-Components is currently accepting contributions in the form of bug fixes and new features. Any submission must have an issue tracking it in the issue tracker that has been approved by the ACE-UX-Components team. Your pull request should include a link to the bug that you are fixing. If you've submitted a PR for a bug, please post a comment in the bug to avoid duplication of effort.

## Legal

If your contribution is more than 15 lines of code, you will need to complete a Contributor License Agreement (CLA). Briefly, this agreement testifies that you are granting us permission to use the submitted change according to the terms of the project's license, and that the work being submitted is under appropriate copyright.

Please submit a Contributor License Agreement (CLA) before submitting a pull request. You may visit https://cla.azure.com to sign digitally. Alternatively, download the agreement ([Microsoft Contribution License Agreement.docx](https://www.codeplex.com/Download?ProjectName=typescript&DownloadId=822190) or [Microsoft Contribution License Agreement.pdf](https://www.codeplex.com/Download?ProjectName=typescript&DownloadId=921298)), sign, scan, and email it back to <cla@microsoft.com>. Be sure to include your github user name along with the agreement. Once we have received the signed CLA, we'll review the request.
