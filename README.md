# Web Blocks
This is the start of a repository which will contain all the building blocks I may need for creating a website. All the little things.

`Do not forget to add necessary css class.`

## Components.

### Message.
This can be used with inputs. (Need to try others.)

Inside a message-container class have the input first then the message class. Inside the message class, write whatever you want to be shown as a message. The message is initially invisible. Use the enabled class to show the message.

You can use other classes as modifiers. This should be used along side message class.

List of modifier classes:
1. small
2. medium
3. large
4. extra-large
5. extra-extra-large
6. huge
7. enabled
8. clickable
9. error
10. warning
11. text-white
12. text-black
13. text-red
14. text-padding
15. text-padding-low
16. text-padding-medium
17. text-padding-high

Example code:
```html
  <div class="message-container">
    <input type="password" placeholder="Password" name="Password">
    <div class="message">
      Message goes here.
    </div>
  </div>
```
### Tooltip.
Just add the class to add a tooltip to any element with closing tag. Use tooltip-text attribute to pass the text of the tooltip.

You can use other classes as modifiers. This should be used along side tooltip class.

1. black
2. text-small
3. text-extra-small
4. text-tiny
5. text-large
6. text-extra-large
7. text-extra-extra-large
8. text-huge
9. clickable

Example code:
```html
  <p class="tooltip black text-small" tooltip-text="THIS IS FINE!">This is a paragraph.</p>
```

### Checkboxes.
First have the input and than the label right after it.
Make sure the type is checkbox with class of checkbox.
Also make sure that the id of input and the for of label are exactly the same.

`Change the size of label to change the size of the whole thing.`

Example code:
```html
  <input type="checkbox" class="checkbox" id="checkbox">
  <label for="checkbox">Checkbox</label>
```

### Buttons

Add any of the class to a button for styling. Some buttons require the text to be inside a span to work. For safety, you can put all the buttons text inside a span or check the example code for each style.

Example Code:

```html
  <button class="btn"><span>A Button</span></button>
```

Examples of all the buttons can be seen [here](https://codepen.io/CodepenSuck/pen/yLbwVrG).
