# whosonduty

A live tracker that displays the RA(s) on duty for each residence hall.
[whosonduty](https://whosonduty.vercel.app)

# project directory

This tracker fetches its data from the whosonduty API (located in a separate private repository), which returns the list of current RA(s) on duty for the selected building.

This app was built with React using TypeScript.

- `src/`
  - contains the main app component displayed on the app
  - `utils/`
    - contains abstracted API functions and all constants for mapping building codes to their string names.

# Impact

"whosonduty" was presented to LMU Student Housing during an in-service CDT meeting. Its purpose is to help give off-duty RAs a better work-life balance, as residents currently have no way of knowing who the current RA(s) on duty actually are.

![Presentation Image](https://i.imgur.com/vzHl278.png)

# Analytics

Since release after the November CDT meeting, whosonduty has been used for almost every building by 112 users. Desmond, Del Rey South, Leavey 5 & 6, and Palm South have the highest userbase with posters up containing QR codes.

![Analytics](https://i.imgur.com/FPC1lNi.png)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner
