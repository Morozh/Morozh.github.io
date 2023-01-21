# Rusfolio (Ruslan Akopyan Personal Portfolio)

A portfolio layout using Pug and Sass.

## Install

* Execute `npm install`.

## Run

* Execute `npm start` or `gulp`.
* Open `http://localhost:8080/` on your web browser.

## Build

* Execute `gulp build`.

## Folders Structure

```
+ assets
  + css : This folder contains prebuild files, styles.css and styles.min.css.
  + fonts : Put your font files here, also do not forget to import it on _variables.scss.
  + icons : Put your icon files here.
  + images : Put your image files here.
  + js : This folder contains prebuild files, scripts.js and scripts.min.js.
+ src
  + js
    - scripts.js : Put your js code here.
  + pug
    + base
      - base.pug : Base pug file.
    + layouts
      - default-layout.pug : Default layout pug file.
    + pages
      - index.pug : Example page pug file, it contains h1 only.
    + partials
      - footer.pug : Footer pug file.
      - header.pug : Header pug file.
  + sass
    + base
      - _global.sass : Put your global styles here, such us html, body, section, headings, anchor etc.
      - _mixins.sass : Put your mixins here;
      - _placeholders.sass : Put your placeholders here;
      - _variables.sass : Put your variables here;
    + components
      - _components.sass : Put your components styles here, such as buttons, modals etc.
    + layouts
      - _footer.sass : Put your footer styles here.
      - _header.sass : Put your header styles here.
    + pages
      - _index.sass : Example sass for specific page.
    - styles.sass : Import all sass files.
- index.html : Prebuild HTML file, other HTML files will be placed here too.
```
