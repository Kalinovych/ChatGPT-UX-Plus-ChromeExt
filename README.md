# Style Adjuster Chrome Extension for ChatGPT

Style Adjuster is a simple Chrome extension that adjusts specific styles on the https://chat.openai.com/ domain to improve the user experience, particularly when interacting with code blocks. The extension modifies the width of the side menu, the font family of `code` and `pre` elements, and the width of chat blocks, as well as applies a custom style for the side menu on smaller viewports.

## Features

- Increases the maximum width of chat blocks on large screens, eliminating side scrolling in code blocks.
- Sets the default width of the side menu to 42px, which expands to 260px when hovered over (applied only when the viewport width is less than 1280px).
- Changes the font family of `code` and `pre` elements to "Roboto Mono".

## Installation

1. Clone the repository or download the source code as a ZIP file and extract it.
2. Open the Chrome browser and navigate to `chrome://extensions`.
3. Enable "Developer mode" using the toggle in the top right corner.
4. Click "Load unpacked" and select the folder containing the extension's source code.

The Style Adjuster extension should now be installed and active in your Chrome browser.

## Project Structure

- `manifest.json`: The extension's manifest file, containing metadata and configuration settings.
- `popup.html`: The HTML file for the browser action popup.
- `styles.css`: The CSS file containing the custom styles for the targeted elements on the https://chat.openai.com/ domain.
- `content.js`: The JavaScript file responsible for injecting the custom styles into the web page.
- `icon.png`: The extension's icon.

## License

This project is released under the MIT License. For more information, see [LICENSE](LICENSE).
