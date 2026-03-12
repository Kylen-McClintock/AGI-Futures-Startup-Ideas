const fs = require('fs');

let content = fs.readFileSync('src/components/forecast/CategoryFrontierForecast.tsx', 'utf8');

// Fix escaped backticks in write_to_file that leaked as actual \` characters
content = content.replace(/\\`/g, '`');
content = content.replace(/\\\$/g, '$');

fs.writeFileSync('src/components/forecast/CategoryFrontierForecast.tsx', content);
console.log("Fixed escaped syntax");
