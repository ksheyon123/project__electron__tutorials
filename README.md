## Electron Bulild Boiler-Plate

### Pre-Requistion

#### Management Npm Packages

1. `npm install electron electron-is-dev electron-builder electron-builder-squirrel-windows` 설치
2. move electron & eletron-builder library dependencies to devDependencies

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
