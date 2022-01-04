---
id: markdown-guide
title: Markdown Guide 
sidebar_label: Markdown Guide 
---

## What is Markdown?

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.

Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages. [More About Markdown](https://www.markdownguide.org/getting-started/).

* * *

## Basic Syntax

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

## Structure Syntax

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

[More Information](https://www.markdownguide.org/basic-syntax/#unordered-lists).

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

[More Information](https://www.markdownguide.org/basic-syntax/#ordered-lists).



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

[More Information](https://www.markdownguide.org/extended-syntax/#tables).

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

[More Information](https://www.markdownguide.org/extended-syntax/#task-lists).



### **Line Break**

```markdown title="Syntax"
Text  <!---Space Space--->
another Text
```

**Example:**

Text  
Another Text

### **Comments **

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
![](https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/fullColor-horizontal-transparent-white.png)

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
> Texto 
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

[More Information](https://www.markdownguide.org/basic-syntax/#horizontal-rules).

***

For more information about Markdown Syntax visit [this page](https://www.markdownguide.org/cheat-sheet/)