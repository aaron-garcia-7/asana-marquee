Marquee inspired by Asana

Compiling sass without the GUI live compiler. In the terminal, enter the following command:

→ npm install -g sass

If this doesn't work due to permission errors, try adding sudo to the beginning.

// TO COMPILE & WATCH FOR CHANGES.

→ sass --watch [file].scss:[output].css

//

// TO COMPILE ONCE. This only compiles once and needs to be re run each time you desire your changes to be compiled.

sass input.scss output.css

Using JSON to run the sass command

1. Create a new package.json file

2. Use the following template (if package.json is outside of styles folder)

{
"name": "marquee",
"version": "1.0.0",
"scripts": {
"watch": "sass --watch styles/index.scss:styles/styles.css"
}
}

3. In the terminal run 'npm run watch'
