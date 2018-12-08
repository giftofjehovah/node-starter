# CLI Fundamentals

## Commands
1. pwd
1. cd 
1. ls
1. touch
1. mv
1. mkdir
1. rm

***

## `pwd`
To know which directory you are in, you can use the `pwd` command. `pwd` stands for print working directory.

```bash
pwd

# /Users/jon
```
***

## `cd`
Use the `cd` command to go to a directory. `cd` stands for change directory.

```bash
cd /Users/jon/Desktop

```
***

## `ls`
Use the `ls` command to know what files are in the directory you are in. `ls` stands for list.

```bash
ls

# /Documents /Music /Pictures /Downloads /Desktop
```
***

## `touch`
The `touch` command is used to create a file. 

```bash
touch new.txt

```
***

## `mv`
Use the `mv` command to move files through the command line. We can also use the `mv` command to rename a file.
`mv` stands for move

```bash
# rename
mv new.txt newer.txt

# move
mv new.txt /Desktop

```
***

## `mkdir`
Use the `mkdir` command when you need to create a folder or a directory. `mkdir` stands for make directory.

```bash
mkdir new-folder 

```
***

## `rm`
Use the rm command to delete files and directories. `rm` stands for remove.

```bash
# delete files
rm newer.txt

# delete folder
rm -r /new-folder
```
***