---
id: markdown-guide
title: Markdown Guide 
sidebar_label: Markdown Guide 
description: Definition and usage of Markdown
keywords: [ Markdown, How to use Markdown, What is Markdown, What is Markdown for, How to write markdown, Markdown Guide, Markdown Commands ]
---

## What is Markdown and What is it Used For ?

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.

Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages. [More About Markdown](https://www.markdownguide.org/getting-started/).

* * *

## Why use Markdown?

You might be wondering why people use Markdown instead of some WYSIWYG editor, it's so much easier to press buttons on an interface to format your text. [More about WYSIWYG](https://www.simplethread.com/everything-you-ever-wanted-to-know-about-wysiwyg-editors/)

Turns out, there are a number of reasons to choose Markdown.

- It is extremely broad. It can be used to create websites, documents, notes, books, presentations, emails, and technical documentation.

- It is portable. Files containing Markdown-formatted text can be opened using almost any application. If you don't like the Markdown application you currently use, you can import your Markdown files into another Markdown application.

- Completely independent of the platform. You can write Markdown text on any device running any operating system.

- It is ready for the future. Even if the application you are currently using stops working at some point in the future, you can still read your Markdown text using a text editor application. This is extremely important when considering books, university theses, and other important documents that must be kept indefinitely.


* * *

## How Does it Work?

When we write in Markdown, the text is saved to a plain text file that has an extension `.md` or `.markdown`. So how do you transform your Markdown file to HTML?

The simple answer is that it requires a Markdown application capable of processing the file. There are many applications available, from small scripts to desktop applications that look like Microsoft Word. Although they have their visual differences, all applications do the same.

These Markdown applications use a Markdown processor also known as *parser* or *implementation* which takes Markdown-formatted text and outputs it to HTML format. It is after this process that your document can be viewed in a web browser or combined with a stylesheet and printed.

**Example**

![Diagram showing the steps to transform a Markdown file into an HTML file](https://mdg.imgix.net/assets/images/markdown-flowchart.png?auto=format&fit=clip&q=40&w=1080)

* * *

## Syntax

Then we will look at examples of basic and structural syntax, to delve into this markup language.

## Basic

| Component | Syntax |
| ----------- | ----------- |
| [Heading](https://www.markdownguide.org/basic-syntax/#headings) |  # H1   <br /> ## H2 <br />  ### H3  |
| [Bold](https://www.markdownguide.org/basic-syntax/#bold) |  `**Text**` or `__text__` |
| [Italic](https://www.markdownguide.org/basic-syntax/#italic) |   `*text*` or  `_text_`|
| [Blockquote](https://www.markdownguide.org/basic-syntax/#blockquotes-1)    | > Blockquote   |
| [Ordered List](#ordered-list) | 1. First Item <br /> 2. Second Item <br /> 3. Third Item  |
| [Unordered List](#unordered-list) | - First Item <br /> - Second Item <br /> - Third Item |
| [Horizontal Rule](#horizontal-rule) | --- |
| [Link](https://www.markdownguide.org/basic-syntax/#links) | `[title](https://www.example.com)` |  
| [Image](https://www.markdownguide.org/basic-syntax/#images-1) | `![text](image.jpg)` |
|[Line Break](#line-break) | text + double space |
| [Comments](#comments) | `<!---Comment--->` |


> Can get up to 6 different headings depending on the number of `#`

***

## Structural

### **Unordered List**  

```markdown title="Syntax"
    - First Item
        - Sub Item
    - Second Item
    - Third Item  
```
**Example:**
- First Item
    - Sub Item
- Second Item
- Third Item

For more information, visit [Markdown Unordered List](https://www.markdownguide.org/basic-syntax/#unordered-lists).

### **Ordered List**

```markdown title="Syntax"
    1. First Item
        1. Sub Item
    2. Second Item
    3. Third Item
```
**Example:**

1. First Item
    1. Sub Item
2. Second Item
3. Third Item

For more information, visit [Markdown Ordered List]https://www.markdownguide.org/basic-syntax/#ordered-lists).



### **Table**

```markdown title="Syntax"
|Left title  | Title center | Right title |  
| :----  |  :----:  |  ----:  |  
| Left | Center | Right |  
| Left | Center | Right |  
```

**Example:**  

|Left title  | Title  | Right title |  
| :----  |  :----:  |  ----:  |  
| Left | Center | Right |  
| Left | Center | Right |  

For more information, visit [Markdown Tables](https://www.markdownguide.org/extended-syntax/#tables).

### **Check List** 


```markdown title="Syntax"
- [x] First option
- [ ] Second option
- [ ] Third option
```

**Example:**

- [x] First option
- [ ] Second option
- [ ] Third option

For more information, visit [Markdown Task List](https://www.markdownguide.org/extended-syntax/#task-lists).



### **Line Break**

```markdown title="Syntax"
Text  <!---Space Space--->
another Text
```

**Example:**

Text  
Another Text

### **Comments**

```markdown title="Syntax"
[comment]: <> (This is a comment, it will not be included)

[//]: <> (This is also a comment.)

[//]: # (This may be the most platform independent comment)`
```

***

## Another Syntaxes

### **Links**

```markdown title="Syntax"
[EOS Costa Rica](https://es.eoscostarica.io)
```

**Example:**  
[EOS Costa Rica](https://es.eoscostarica.io)

### **Images**


```markdown title="Syntax" 
![](https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/fullColor-horizontal-transparent-white.png)
```
**Example:**  
![How markdown displays the example image](https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/fullColor-horizontal-transparent-white.png)

* * *
### **Videos**

``` markdown title="Syntax"
<iframe width="100%" height="350" src="https://www.youtube.com/embed/tss1d0sow0o" frameBorder="0" allowFullScreen loading="lazy"></iframe> 
```
**Example:**

<iframe width="100%" height="350" src="https://www.youtube.com/embed/f49LJV1i-_w" frameBorder="0" allowFullScreen loading="lazy"></iframe> 

* * *

### **Block Citation**

```markdown title="Syntax"
> Main Text
>> Text
>>
> * Item
> * Item
> Text 
> Final Text
```
**Example:**

> Main Text
>> Text
>>
> * Item
> * Item
> Text 
> Final Text

### **Horizontal Rule**

```markdown title="Syntax"
---
***
- - - -
```
**Example:**

---
***
- - - -

### **Code**

#### *Javascript*

```javascript title="Syntax"
  var s = 'JavaScript syntax highlighting';
  alert(s);
```


#### *Phyton*

```python title="Syntax"
  s = "Python syntax highlighting"
  print(s)
```

#### *Function*

```javascript title="Syntax"
  function highlightMe() {
  console.log('This line can be highlighted!');
}
```
For more information about Markdown syntax you can visit the markdown guide [Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

* * *

## Flavors of Markdown

The most confusing aspect of using Markdown is that almost all applications implement a slightly different version. These versions are commonly known as Flavors.

To understand the meaning of Flavors in Markdown, we can in them as dialects of the language. The people of Mexico speak Spanish just like the people of Costa Rica, but there are substantial differences between the dialects used in both countries. The same is true for those who use different Markdown apps.

So it is our job to master whatever version of Markdown we have implemented in our application.

[More information about markdown](https://www.markdownguide.org/basic-syntax/#horizontal-rules).
