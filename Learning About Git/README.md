# Basic introduction on Git
Git is a version-control system for tracking changes in computer files and coordinating work on those files among multiple people. It is a Distributed Version Control System and does not rely on a central server to store all the versions of a project’s files. Git helps to keep track of the changes made on code.

## Repository
Repository is a collection of files of various different versions of a Project. 

## There are a few stages of a file in the working tree of a repository:
* **Untracked:** In this stage, the Git repository is unable to track the file, which means that the file is never staged nor it is committed.
* **Tracked:** When the Git repository tracks a file, which means the file is committed but is not staged in the working directory.
* **Staged:** In this stage, the file is ready to be committed and is placed in the staging area waiting for the next commit.

## Commands example
* `git add` is a command used to add a file that is in the working directory to the staging area.
* `git commit` is a command used to add all files that are staged to the local repository.
* `git push` is a command used to add all committed files in the local repository to the remote repository. So in the remote repository, all files and changes will be visible to anyone with access to the remote repository.
* `git fetch` is a command used to get files from the remote repository to the local repository but not into the working directory.
* `git merge` is a command used to get the files from the local repository into the working directory.
* `git pull` is command used to get files from the remote repository directly into the working directory. It is equivalent to a git fetch and a `git merge`.

## Extra Read Material
[Git & GitHub Crash Course For Beginners](https://www.youtube.com/watch?v=SWYqp7iY_Tc)
