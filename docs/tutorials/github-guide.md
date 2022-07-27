---
id: github-guide
title: GitHub Guide 
sidebar_label: GitHub Guide 
description: Definition and usage of version control system GitHub
keywords: [ GitHub, Git, What is GitHub, How GitHub Works, How to use GitHub, What is GitHub for]
---
import useBaseUrl from '@docusaurus/useBaseUrl';

[GitHub](https://docs.github.com/en) is a project management system in the cloud that allows developers to store and have code version control. This platform allows you to work collaboratively with other people around the world, track jobs, and manage projects. [Learn more about GitHub](https://www.howtogeek.com/180167/htg-explains-what-is-github-and-what-do-geeks-use-it-for/).

For EOS Costa Rica, it is of utmost importance that our collaborators familiarize themselves with this tool, which is why we offer below a basic guide to get started in the world of GitHub.

* * *

## **Tools**
### [GitHub CLI](https://docs.github.com/es/free-pro-team@latest/github/getting-started-with-github/github-cli)

GitHub [CLI](https://cli.github.com) is a command line tool for using GitHub functions on your own computer.

<img alt="GitHub CLI Image" src={ useBaseUrl( 'img/LogosGitHub/GitHub-CLI.webp' )} />

### [GitHub Desktop](https://docs.github.com/es/free-pro-team@latest/github/getting-started-with-github/github-desktop)

[GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/installing-github-desktop) is the desktop application that allows the user to interact with Github functionalities through the graphical interface, replacing the lines of code with a visual device.

<img alt="GitHub Desktop Image" src={ useBaseUrl( 'img/LogosGitHub/GitHub-Desktop.webp' )} />

### [GitHub for mobile](https://docs.github.com/en/github/getting-started-with-github/github-for-mobile)


[GitHub for mobile](https://play.google.com/store/apps/details?id=com.github.android&hl=es_419&gl=US) is available for Android and iOS, it gives you a way to get high-impact work on GitHub quickly, from anywhere. It also becomes a secure and stable way to access GitHub data through a trusted source client application.

<img alt="GitHub Móvil Image" src={ useBaseUrl( 'img/LogosGitHub/GitHub-Movil.webp' )} />

### [Git Bash](https://desarrolloweb.com/articulos/entiende-instala-configura-git.html#:~:text=Git%20Bash%20es%20la%20línea,para%20usar%20Git%20en%20Windows.)

[Git Bash](https://gitforwindows.org) is a Git application for Windows, where it allows working through command lines managing projects found on GitHub.

<img alt="Git Bash Image" src={ useBaseUrl( 'img/LogosGitHub/GitHub-Bash.webp' )} />

### [Hub](https://hub.github.com)

[Hub](https://github.com/github/hub) is an extension to command-line git that helps you do everyday GitHub tasks without ever leaving the terminal.


### [Git-extras](https://www.mankier.com/1/git-extras)
[Git-extras](https://github.com/tj/git-extras) repo hosts more than 60 scripts that add to Git's basic functionality. More information about [Commands](https://github.com/tj/git-extras/blob/master/Commands.md).



* * * 

## **Commands** 

### Start Repository

Create a new directory.
```
 git init
```

Clone an existing repository.
```
git clone <url>
```
For more information, visit [Git Commands](https://github.com/joshnh/Git-Commands).

### Branches

List the existing branches.
```
git branch 
```

Create new branch.
```
git branch <name of the new branch> 
```

Create new branch and switch to it.
```
git branch -m <name of the new branch>
git checkout -b <name of the new branch>
```

Change branch.
```
git checkout <branch name> 
```

Delete a branch.
```
git branch -d <branch name> 
```
For more information, visit [Working with Branches in Git and GitHub](https://thenewstack.io/dont-mess-with-the-master-working-with-branches-in-git-and-github/).

### Upload Changes

Update your local repository.
```
git pull
```

Add a file to the repository.
```
git add <file name>
```

Add all the files to the repository.
```
git add .
```

Add all files omitting the new ones.
```
git add --all
```

Add all files within a directory.
```
git add <url> 
```

Commit the changes.
```
git commit -m <"commit title"> 
```

Upload changes to the repository.
```
git push origin <branch name> 
```

Merge another branch to the current one.
```
git merge <branch name> 
```
For more information, visit [Github Command Line](https://www.tutsmake.com/upload-project-files-on-github-using-command-line/).

### Fork

Download remote from a fork
```
git remote add upstream <url>
```

Merge with master
```
git fetch upstream
git merge upstream/master 
```
For more information, visit [Using the Fork and Branch Git Workflow](https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/).

### Other Commands

Review commit logs.
```
git log
```

Show changes made to a file.
```
git diff 
```

Take file out of a commit.
```
git reset HEAD <file> 
```

Add remote repository.
```
git remote set-url origin <url> 
```

Show list of repositories.
```
git renite -v 
```

Show current repository status.
```
git status 
```
 
Verify changes in the repository online with the local one.
 ```
git fetch 
```

Delete file from repository.
```
git rm <file> 
```
For more information, visit [Git Commands](https://dzone.com/articles/top-20-git-commands-with-examples).