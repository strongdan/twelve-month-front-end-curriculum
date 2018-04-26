## Defining the viewport
* browser reports width in Device-Indepedent Pixels (DIPs), not hardware pixels
* DIPS will take up the same amount of space on a display regardless of the pixel density

## Device Pixel Ratio
* The ratio of DIPs to hardware pixels
* differences between devices are often the result of different device pixel ratios or not defining the viewport

## Calculating CSS Pixels
* hardware pixels X ( css pixels / device pixel ratio )

## Calculating Viewport Width
* hardware pixels / device pixel ratio

## Setting the Viewport
```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
* width will match screensize
* initial scale = 1 will establish a 1:1 relationship between DIPS and CSS pixels

## Relative position
* Large fixed width elements may flow off screen
* Important to make sure content fits within viewport
* better to use relative position such as max-width=100%
* good CSS catch-all: 
```css
img, embed, object, video { 
  max-width: 100%; 
}
```

## Touch/Tap Targets and Inputs
* need to be big enough and well-spaced so users can interact
* fingers about 1/2 inch or 40 CSS pixels
* should make 48 pixels wide X 48 pixels tall
* make sure there's a minimum of 40 pixels of space between tap targets
```css
nav a, button {
  min-width: 48px;
  min-height: 48px;
}
```

## Start Small
* start with smallest form factor (eg. phone) and move up from there
* have to prioritize screen content for users
* Design and code from small to large
* also enhances performance 
