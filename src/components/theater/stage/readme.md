Forventet Input:
WC-Property: layers

{
"id":"pariseropera",
"restrictYAxis":false, // disabel parallax movement vertically
"label":"Pariser Opera",
"layers": [
{
"imgSrc":"173e46b66b9b930d2c43.webp",
"altText":"bagtaeppe",
"zIndex":1 // the backlayer
},
{
"imgSrc":"7f5f18ebf44d16ccaca3.webp",
"altText":"mellemtaeppe",
"zIndex":2
},
{
"imgSrc":"71b4e5dddcf9aeb14e36.webp",
"altText":"fortæppe",
"zIndex":3 // the frontlayer
}
]
}
layers array can be grater than three.

Custom Attributes:
'blendmode' takes all values of css-property mix-blend-mode
'overlay-color' color - used by mix-blend-mode
'click-to-activate' dont need value, parallax movement default disabled, click => parallax movement enabled.
prevents outbound click event
'disable-parallax' dont need value, all parallax effects removed

Events:
stageclicked no payload

---

## USAGE

template:
<ph-stage
blendmode="color-burn"
overlay-color: rgb(0,0,0,.6);
click-to-activate
disable-parallax

> </ph-stage>

script:
docucument.querySelector('ph-stage').addEventListener('stageclicked', console.log('StageComponent´s overlay was clicked'))

MIX-BLEND-MODE VALUES
mix-blend-mode: normal;
mix-blend-mode: multiply;
mix-blend-mode: screen;
mix-blend-mode: overlay;
mix-blend-mode: darken;
mix-blend-mode: lighten;
mix-blend-mode: color-dodge;
mix-blend-mode: color-burn;
mix-blend-mode: hard-light;
mix-blend-mode: soft-light;
mix-blend-mode: difference;
mix-blend-mode: exclusion;
mix-blend-mode: hue;
mix-blend-mode: saturation;
mix-blend-mode: color;
mix-blend-mode: luminosity;
