## Electron Bulild Boiler-Plate

### Pre-Requistion

#### Management Npm Packages

1. `npm install electron electron-is-dev electron-builder electron-builder-squirrel-windows` 설치
2. move electron & eletron-builder library dependencies to devDependencies

#### Eject CRA Project

1. `npm run eject` 실행

---

### Run Electron

Adding execute scripts in package.json

```
// package.json

{
  "scripts" : {
    ...etc,
    "react-start": "BROWSER=none npm start",
    "electron-start": "electron .",
  }
}
```

> Description :<br />
>
> > react-start : Run React Project Without Browser Opening<br />
> > electron-start : Run electron

---

### Build Electron Project

#### Step.1 npm run build

#### Step.2 Add package command

```
{
  "scripts" : {
    ...etc,
    "dist": "electron-builder --mwl --c.extraMetadata.main=build/electron.js",
    "dist:mac": "electron-builder --mac --c.extraMetadata.main=build/electron.js",
    "dist:windows": "electron-builder --win --ia32 --c.extraMetadata.main=build/electron.js"
  }
}
```

> Description : <br />
>
> > dist : Package React Project built in build dir. Creating Windows, Mac OS & Linux Version with --mwl command <br />
> > dist:mac : Create Mac OS Application <br />
> > dist:windows : Create Windows OS Application

#### Step.3 Add build Config in package.json

> Reference in package.json

#### Step.4 Build Windows OS

Mac OS^Catallina cannot package React project into the .exe File.

User need to package project into Installer using nsis.

```
// package.json

{
  ...etc,
  "win": {
    "target": [
      {
        "target": "nsis",
        "arch": [
          "x64",
          "ia32"
        ]
      }
    ],
  }
}

```
