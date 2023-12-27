# whosonduty

A live tracker that displays the RA(s) on duty for each residence hall.
[whosonduty](https://whosonduty.vercel.app)

# directory structure

This tracker fetches its data from the whosonduty API (located in a separate private repository), which returns the list of current RA(s) on duty for the selected building.

This app was built with React using TypeScript.

```
.
└── public           # General site information and descriptions
└── src              # Code containing site components and relevant functions
    ├── components   # Components for each major section of the app
    ├── utils        # Utilities for themes, API function abstraction, and constant variable maps
```

# impact

"whosonduty" was presented to LMU Student Housing during an in-service CDT meeting. Its purpose is to help give off-duty RAs a better work-life balance, as residents currently have no way of knowing who the current RA(s) on duty actually are.

![Presentation Image](https://i.imgur.com/vzHl278.png)

# analytics

Since release after the November CDT meeting, whosonduty has been used for almost every building by 112 users. Desmond, Del Rey South, Leavey 5 & 6, and Palm South have the highest userbase with posters up containing QR codes.

![Analytics](https://i.imgur.com/FPC1lNi.png)

## available scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner
