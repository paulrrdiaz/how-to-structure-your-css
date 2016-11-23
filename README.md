# How to Structure your CSS
*NOTE: Everything you'll see/read in here are advice not rules*

## Good Practices

### Internal Standards
Keep it consistent and simple, you have to be empathetic with other developers and the most difficult thing is agree on what kind of standards you're going to use but when you cross that bridge you'll be confident in your team and it'll have a high impact in any project.
You can check some examples from other companies:
- [PrimerCSS/Github](http://primercss.io/)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.xml)
- [Idiomatic CSS](https://github.com/necolas/idiomatic-css)

### Basics
- Each style gets its own line.
```
.some-class {
  background: red;
  padding: 2em;
  border: 1px solid black;
}
```
- Check Frameworks like [Material Framework](http://nt1m.github.io/material-framework/#introduction), [Bootstrap](http://getbootstrap.com/), [Foundation](http://foundation.zurb.com/), etc; to understand why they did those things.
- Don't forget the reset, all browsers have some inconsistencies such as heights, font sizes, margins, etc; thus we should clean it up.
- Use classes instead of tags *I'm pretty sure that I don't have to talk about IDs*
```
HTML
<div class="admin-center-tabs">
  <a class="admin-center-tabs-item" href="javascript:;">I'm a link</a>
</div>

CSS
// Not a good idea
.admin-center-tabs {
  > a {
    @include font-size(14);
    color: green;
  }
}
// or
a.admin-center-tabs-item {
  @include font-size(14);
  color: green;
}

// Good idea
.admin-center-tabs-item {
  @include font-size(14);
  color: green;
}
```
- Comment your CSS(optional)
- Use [EditorConfig](http://editorconfig.org/) *please*
- Try to use Generic Classes
```
.pull-left {
  float: left;
}

.pull-right {
  float: right;
}

.text-center {
  text-align: center;
}
```
- Avoid extra selectors
```
// Really bad idea
.admin-center-view-container {
  .admin-center-view-header {
    .pull-right {
      h2 {
        @include font-size(18);
        color: red;
        margin: 0;

        small {
          @include font-size(12);
          color: blue;
        }
      }
    }
  }
}

// Good idea
.admin-center-header-title {
  @include font-size(18);
  color: red;
  margin: 0;
}

.admin-center-header-subtitle {
  @include font-size(12);
  color: blue;
}
```

### Order your CSS properties
- Randomly(**YOLO**)
```
.some-class {
  z-index: 10;
  font-size: 16px;
  color: red;
  display: flex;
  background-color: blue;
}
```
- Grouped by type
```
.some-class {
  /* Positioning */
  position: relative;
  z-index: 10;

  /* Display & Box Model */
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border: 10px solid #333;
  margin: 10px;

  /* Color */
  background: #000;
  color: #fff

  /* Text */
  font-size: 16px;
  text-align: right;

  /* Other */
  cursor: pointer;
}
```
- Alphabetical
```
.some-class {
  z-index: 10;
  font-size: 16px;
  color: red;
  display: flex;
  background-color: blue;
}
```
### Organizing CSS
- [OOCSS - Object Oriented CSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/)
- [SMACss - Scalable and Modular Architecture for CSS](https://smacss.com/)
- [BEM - Block Element Modifier](http://getbem.com/)

### Choose a preprocessor
There are lot of reasons for doing this, my favorites:
- **$variables** | It's not worth it have all these hexadecimal values or font names or sizes or anything that we're going to use and reuse in the future, right?
```
/* variables.scss */
$colors: (
  blue: #0277bd,
  blue-pressed: #0169a7,
  green: #009b5e,
  green-hover: #20a772,
  green-pressed: #008d55,
  black-1: #222a38,
  black-2: #2b3341,
  grey-1: #5d6471,
  grey-2: #939fb4,
  orange: #f5a623,
  red: #f26363,
  red-pressed: #d85858,
  white: #fff,
  _black: #000,
);

$font-families: (
  droid: ("Droid Serif", serif),
  lato: ("Lato", sans-serif),
);

$font-styles: (
  base-font-size: 16,
  base-line-height: 24,
);

$sizes: (
  gutter: 20px,
  radius: 4px,
);
```
- **import** | Remember that CSS @import makes another http request to fetch another stylesheet, while a Sass @import grabs the content from inside your imported file and includes it within the compiled stylesheet.
```
// shared component
@import 'components/buttons';

// view specific css
@import 'views/admin-center';
```
- **@mixins** | Anything which helps you write less code is welcome and mixins are my favorites ones
```
@mixin css3-prefix($property, $value) {
  -webkit-#{$property}: #{$value};
   -khtml-#{$property}: #{$value};
     -moz-#{$property}: #{$value};
      -ms-#{$property}: #{$value};
       -o-#{$property}: #{$value};
          #{$property}: #{$value};
}
@mixin border-radius($radius: 4px) {
	@include css3-prefix("border-radius", $radius);
}
```
- **@extend** | You can attach all the attributes from a class to another one
```
.btn-regular,
%btn-regular {
  @include border-radius(4px);
  @include font-size(14);
  @include lato-bold();
  @include transition();
  background-color: map-get($colors, grey-5);
  border: 1px solid map-get($colors, grey-3);
  color: map-get($colors, grey-1);
  display: inline-block;
  height: 40px;
  line-height: 36px;
  outline: none;
  padding: 0 (map-get($sizes, gutter) * 1.5);
}

.btn-small {
  @extend %btn-regular;
  height: 36px;
  line-height: 32px;
  padding: 0 map-get($sizes, gutter);
}
```
- Math, Loops, Functions, Interpolation...

and you have a plethora of options
- [Sass](http://sass-lang.com/) <3
```
SASS
$serif-font-stack: "Georgia", "Times New Roman", serif
$monospace-font-stack: "Cousin", "Courier"

body
    font: normal 18px/22px $serif-font-stack

pre, code
    font: 600 bold 18px/22px $monospace-font-stack
```
```
SCSS
$serif-font-stack: "Georgia", "Times New Roman", serif;
$monospace-font-stack: "Cousin", "Courier";

body {
    font: normal 18px/22px $serif-font-stack;
}

pre, code {
    font: 600 bold 18px/22px $monospace-font-stack;
}
```
- [Less](http://lesscss.org/)
```
.button {
    display: inline-block;
    width: 80%;
    max-width: 200px;
    border-radius: 5px;
    background-color: black;
    color: white;
    font-size: 14px;
    margin: 5px;
    padding: 8px;
}

.button-checkout-process {
    .button(); /* Mixin */
    background-color: silver;
}
```
- [Stylus](http://stylus-lang.com/)
```
border-radius()
  -webkit-border-radius: arguments
  -moz-border-radius: arguments
  border-radius: arguments

body
  font: 12px Helvetica, Arial, sans-serif

a.button
  border-radius: 5px
```
- [Myth](http://www.myth.io/)
```
:root {
  --purple: #847AD1;
  --large: 10px;
}

a {
  color: var(--purple);
}

pre {
  padding: var(--large);
}
```
### Create Documentation
- [livingstyleguide](https://github.com/livingstyleguide/livingstyleguide)
- [Hologram](https://trulia.github.io/hologram/)
- [Documentcss](http://documentcss.com/)

### We're not perfect people *but we're software engineers so it's almost the same* thus we need help!
- Linters like [CSSLint](https://github.com/CSSLint/csslint), [ScssLint](https://github.com/brigade/scss-lint), [LessHint](https://github.com/lesshint/lesshint), etc.
- [Zeplin](https://zeplin.io/)
- [Invision](https://invis.io/)
- [W3C CSS Validation](http://jigsaw.w3.org/css-validator/)

### [PostCSS](https://github.com/postcss/postcss) and [CSS Modules](https://github.com/css-modules/css-modules)
Yei! code! finally :')

## Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.
