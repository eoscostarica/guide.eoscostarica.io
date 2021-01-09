---
id: markdown-guide
title: Markdown Guide 
sidebar_label: Markdown Guide 
---

## What is Markdown?

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages. [More About Markdown](https://www.markdownguide.org/getting-started/)


## Main components

| Component | Markdown Syntax |
| ----------- | ----------- |
| [Heading](https://www.markdownguide.org/basic-syntax/#headings) |  # H1   <br /> ## H2 <br />  ### H3  |
| [Bold](https://www.markdownguide.org/basic-syntax/#bold) |  `**Text**` or `__text__` |
| [Italic](https://www.markdownguide.org/basic-syntax/#italic) |   `*text*` or  `_text_`|
| [Blockquote](https://www.markdownguide.org/basic-syntax/#blockquotes-1)    | > blockquote   |
| [Ordered List](#ordered-list) | 1. Item <br /> 2. Item <br /> 3. Item  |
| [Unordered List](#unordered-list) | - Item <br /> - Item <br /> - Item |
| [Horizontal Rule](#horizontal-rule) | --- |
| [Link](https://www.markdownguide.org/basic-syntax/#links) | `[title](https://www.example.com)` |  
| [Image](https://www.markdownguide.org/basic-syntax/#images-1) | `![text](image.jpg)` |
|[Line Break](#line-break) | text + double space |
| [Comments](#comments) | `<!---Comment--->` |


> Can get up to 6 different headings depending on the number of `#`

## Structure Syntax


### **Unordered List**  

Unordered list with sub-items syntax

```markdown title="Markdown"
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

>[more information](https://www.markdownguide.org/basic-syntax/#unordered-lists)

### **Ordered List**

Ordered list with sub-items syntax

```markdown title="Markdown"
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

>[more information](https://www.markdownguide.org/basic-syntax/#ordered-lists)

### **Table**

Table syntax

```markdown title="Markdown"
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |
```
**Example:**  

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

>[more information](https://www.markdownguide.org/extended-syntax/#tables)

### **Check List** 

Check list syntax

```markdown title="Markdown"
    - [x] First option
    - [ ] Second option
    - [ ] Third option
```

**Example:**

- [x] First option
- [ ] Second option
- [ ] Third option

>[more information](https://www.markdownguide.org/extended-syntax/#task-lists)

### **Line Break**

Line break syntax

```markdown title="Markdown"
    Text  <!---Space Space--->
    Another Text
```

**Example:**

Text  
Another Text

### **Comments **


**Example:**

```markdown title="Markdown"
    [comment]: <> (This is a comment, it will not be included)

    [//]: <> (This is also a comment.)

    [//]: # (This may be the most platform independent comment)
```

## Another Syntaxes

### **Links**

Links syntax

```markdown title="Markdown"
[Eos Costa Rica](https://es.eoscostarica.io)
```
**Example:**  

[Eos Costa Rica](https://es.eoscostarica.io)

### **Images**

Images syntax

```markdown title="Markdown" 
![](https://media-exp1.licdn.com/dms/image/C4E0BAQFBDxX8sb8eRQ/company-logo_200_200/0/1562012485976?e=2159024400&v=beta&t=gifOwJQ3a5xmVcAzmORT7thKl9uzaKH9bv74yp2vHns)
```
**Example:**  

![](https://media-exp1.licdn.com/dms/image/C4E0BAQFBDxX8sb8eRQ/company-logo_200_200/0/1562012485976?e=2159024400&v=beta&t=gifOwJQ3a5xmVcAzmORT7thKl9uzaKH9bv74yp2vHns)


### **Block Citation**

Block citation syntax

```markdown title="Markdown"
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

Horizontal rule syntax  

```markdown title="Markdown"
---
***
- - - -
```
**Example:**

---

***

- - - -

>[more information](https://www.markdownguide.org/basic-syntax/#horizontal-rules)


For more information about Markdown Syntax go to [this page](https://www.markdownguide.org/cheat-sheet/)