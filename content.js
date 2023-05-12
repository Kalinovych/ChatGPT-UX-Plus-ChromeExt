chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'adjustStyles') {
      const { widthSetting } = request;
      const maxWidth = widthSetting === 'fixed' ? '54rem' : '100%';
  
      // Inject custom styles for the content area and other elements
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        @media (min-width: 1024px) {
          html .lg\\:max-w-xl {
            max-width: ${maxWidth} !important;
          }
        }
      `;
      document.head.appendChild(styleElement);
    }
  });
  