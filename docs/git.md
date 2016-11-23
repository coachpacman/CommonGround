# Git Branching

### Steps
1. `git checkout -b DEV-01` where DEV-01 is branch name
    1. do work
    2. `git add .`
    3. `git commit -m "descriptive message"`
    4. repeat from step 1
2. `git push origin DEV-01`
3. `git checkout master`
4. `git pull origin master`
5. `git merge DEV-01`
    1. Fix conflicts if any
    2. `git commit -m "fixed conflicts"`
6. `git push origin master`
