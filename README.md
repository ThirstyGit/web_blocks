# Web Blocks
This is the start of a repository which will contain all the building blocks I may need for creating a website. All the little things.

`Do not forget to add necessary css class.`

## Components.

### Message.
This can be used with inputs. (Need to try others.)

Inside a message-container class have the input first then the message class. Inside the message class, write whatever you want to be shown as a message.

You can use other classes as modifiers. This should be used along side message class.

List of classes:
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