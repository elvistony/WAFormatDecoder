# Whats App Text Format Decoder

Converts WhatsApp Chat text formatting to Webpage friendly Text using JavaScript

Has the following features

* Pure JavaScript Code
* Direct Conversion by `class="WAdecode"` inclusion to `div` block
* Enables users to use WhatsApp formatted text as Data in Websites

Current Issues

* Unable to accuratly Convert \`\`\` to a `<quote>` tag due to size 3;
  Nothing Else found Yet. . .

A tiny project hoping to save y'all some time


Search Tags: #WhatsApp #WADecoder #WATextFormat

Instructions to Set it up,

* Clone this repository to a folder and copy the *WAdecode.js* file to your js folder (Website Directory)

* Import this script into your "What's App text" contained HTML page like 
  * `<script src"../js/WAdecode.js"></script>`
  
* Invoke this function by adding the *classname* - ```WAdecode``` like 
  * `<div class=" WAdecode ">Your WhatsApp text her</div>`
  
* That's it, you're good to go. :)
