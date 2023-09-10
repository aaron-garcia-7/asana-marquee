/_ Compiling sass without the GUI live compiler. In the terminal, enter the following command: _/

npm install -g sass

/_ If this doesn't work due to permission errors, try adding sudo to the beginning. _/

//

/_ TO COMPILE & WATCH FOR CHANGES. _/

sass --watch [file].scss:[output].css

//

/_ TO COMPILE ONCE. This only compiles once and needs to be re run each time you desire your changes to be compiled. _/

sass input.scss output.css
