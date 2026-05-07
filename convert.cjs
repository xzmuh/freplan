const fs = require('fs');
const path = require('path');

function convertHtmlToJsx(html, componentName) {
  let mainContent = html.match(/<main>([\s\S]*?)<\/main>/);
  if (!mainContent) {
    // If no main, try to find content between nav and footer
    mainContent = html.match(/<\/nav>([\s\S]*?)<footer/i);
    if (!mainContent) {
      // Fallback: extract body
      mainContent = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    }
  }

  if (!mainContent) return `export default function ${componentName}() { return <div>Error</div>; }`;

  let jsxContent = mainContent[1]
    .replace(/class=/g, 'className=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
    .replace(/<img([^>]+?)([^\/])>/g, '<img$1$2 />')
    .replace(/<input([^>]+?)([^\/])>/g, '<input$1$2 />')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />');

  // Remove Navbar and Footer if they were accidentally included
  jsxContent = jsxContent.replace(/<nav[^>]*>[\s\S]*?<\/nav>/ig, '');
  jsxContent = jsxContent.replace(/<footer[^>]*>[\s\S]*?<\/footer>/ig, '');

  return `import React from 'react';

export default function ${componentName}() {
  return (
    <>
      ${jsxContent}
    </>
  );
}
`;
}

['original_home.html', 'produtos.html', 'sobre.html'].forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const nameMap = {
      'original_home.html': 'Home',
      'produtos.html': 'Products',
      'sobre.html': 'About'
    };
    const componentName = nameMap[file];
    const jsx = convertHtmlToJsx(content, componentName);
    fs.writeFileSync(path.join('src', 'pages', `${componentName}.jsx`), jsx);
    console.log(`Converted ${file} to ${componentName}.jsx`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
