# simple-grid
I created this project to teach myself how to build a grid system.
A grid is a essential component of a CSS framework. Bootstrap, Foundation have advanced grid system, but i wanted to create my own to understand the internals.
Also, it was a good opportunity to start using SaSS and Gulp.

> This grid system is absolutely basic. You don't want to use it in a real product, at best you can use it for your personal website if you don't need to do more complicated things.
> It's has (ultra) basic responsive features.

#Features
 - 8-columns grid-system with padding.
 - Easily editable 
 - ultra-light. A good starting point if you want to learn.
 - basic responsive features 
   1.  handling screen size < 480px.
  
#Getting started
You will need npm, gulp and sass installed on your machine.
Just clone the repository and browse the directories. It's only a couple of files :)
    
        git clone https://github.com/broyeztony/simple-grid.git

If you want to work on it, you will need to install the Gulp dependancies (gulp-sass...).
There is a package.json file at the root of the project so you just need to

        npm install
        
Then you can start the Gulp default task where i've set up a watcher so all your changes to the .scss files in the scss/ directory will be automagically compiled to .css files and moved to the css/ directory. Type

        gulp
        
in your terminal.
        



