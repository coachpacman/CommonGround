#Git Branching

Steps:
    1. git checkout -b DEV-01 `DEV-01 is the branch name`
        * do work
        * git add .
        * git commit -m "descriptive message"
        * repeat
    2. git push origin DEV-01
    3. git checkout master
    4. git pull origin master
    5. git merge DEV-01
        * fix conflicts if any
    6. git push origin master
