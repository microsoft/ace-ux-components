# ACE UX Test Project

## Table of content

1. [About sample component card](#about-sample-component-card)
2. [How to set-up project](#how-to-set-up-project)
3. [How to run project](#how-to-run-project)
4. [How to update ux-component project](#how-to-link-ux-component-project)

## About Sample component card

- Sample card is used to develop and test the UI changes for ace-ux-components package.
- For any changes in ace-ux-componets, add the required changes in sample components related view.

## How to set-up project

- Clone this repository
- Ensure that you are at the dashboard folder, in the command-line run:
  - **npm install**

## How to run project

- Replace the DOMAINURL with your orgnization domain url in dashboard/config/serve.json file.
- Ensure that you are at the dashboard folder, in the command-line run:
  - **npm run serve**
- Open the initialPage url in web browser from dashboard/config/serve.json file after replacing the DOMAINURL.
- Now add sample component card and preview changes.

## How to link ux-component project

- Once you changed any file in ux-components project, Ensure that you are at the dashboard folder, in the command-line run which build the latest ux-components and pull the latest library upon the build succeeds.
  - **npm run pull-ace-ux**
