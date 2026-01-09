# SUI3

*a startpage for your server and / or new tab page*

**SUI3** is a streamlined static startpage, the third iteration of the SUI series.

### History & Lineage
1.  **[sui](https://github.com/jeroenpardon/sui)**: The original project.
2.  **[sui2](https://github.com/reorx/sui2)**: Added keyboard navigation, PWA, and Docker support.
3.  **SUI3** (This Project): Forked from `reorx/sui2`. Removed complex backend dependencies (Docker/Live Server) to focus on a pure, lightweight static site experience. Added **JSON-based configuration**, security hardening, and accessibility improvements.

### Requirements
*   **Node.js**: >= 18.0.0 (Recommended: 20+)
*   **Package Manager**: npm / yarn / pnpm


## Deploy to any static hosting

sui2 uses Vite to build a staic website, which means it's nothing but vanilla HTML/CSS/JavaScript that could be deployed to anywhere you want.

To build the project, simply follow the steps below.

1. Install dependencies: `npm i`
2. Create you own `data.json`

   sui2 get all the data it requires from `data.json`, you can make a copy from `data.example.json`, and then edit it with your own applications and bookmarks.
3. Build the result: `npm run build`

   The result will be stored in the `dist` folder
4. Upload to a static hosting.

   There are various hosting services like GitHub Pages, Cloudflare Pages, Netlify.
   Examples will be documented later on.

If you are happy with the look and functionality of sui2, it is recommended to use this project as a submodule rather than fork it. Please checkout [reorx/start](https://github.com/reorx/start) as an example for how to use it in another project, and how to build with GitHub Actions and deploy to Cloudflare Pages.
    
## `data.json` editing
There's a full example in [data.example.json](https://github.com/reorx/sui2/blob/master/data.example.json).

### Theme Configuration
You can set a default theme in `data.json`:
```json
"theme": "blackboard"
```
Available themes: `blackboard`, `gazette`, `espresso`, `cab`, `cloud`, `lime`, `tron`, `blues`, `passion`, `chalk`, `paper`.

### Configurable Icons
You can customize the Favicon and PWA App Icon by defining the `icons` object:
```json
"icons": {
  "favicon": "favicon.ico",
  "pwa": "app-icon-512.png"
}
```
If not specified, it defaults to `icon-512.png` for both.

### Link Attributes
You can customize how bookmarks open using `target` and `rel` attributes:
```json
{
  "name": "External Site",
  "url": "https://example.com",
  "target": "_blank",
  "rel": "nofollow noopener"
}
```

### Icons
The `icon` attribute uses the [MDI icon set from Iconify](https://icon-sets.iconify.design/mdi/). usage: `mdi:icon-name` -> `"icon": "icon-name"`.

## New Features
- **Real-time Clock**: Top-right clock now displays seconds and updates every second.
- **Search Shortcut**: Press `/` to quickly focus the search bar.
- **Accessibility**: Improved contrast ratios for better readability on all themes.
- **Secure Search**: Enhanced search security against XSS.

## Development

Developing the startpage is easy, first clone the project, then run the following:

```bash
npm install

# start vite dev server
npm run dev
```

## TODO

Some other features I plan to work in the future, PRs are welcome.

- [ ] Custom theme editor
- [ ] Support dynamically render the page from `data.json`. This makes it possible to host a sui2 distribution that is changable without the building tools.
- [ ] A chrome extension that shows sui2 in a popup.
- [ ] Add new tab support for the chrome extension.

## Donation

If you think this project is enjoyable to use, or saves some time,
consider giving me a cup of coffee :)

- [GitHub Sponsors - reorx](https://github.com/sponsors/reorx/)
- [Ko-Fi - reorx](https://ko-fi.com/reorx)
