# Team-bevarege Website

##
Dummy

*Last stable dummy example*: http://team-beverage.typozone.pro/dymmy/index.html 
```
admin:wbadmin
```

### Common

Main idea - website from repository shoud work anywhere on share hosting.

### GIT

.gitignore work in ignore all stratagy. If you need add some file in repository add exeption rule to .gitignore. This strategy will help developers keep needed files fo custom inviroment in root folder

@todo i'd like don't use website root folder in .GIT like now 'pulic/' better keep project directly in public folder as depend differnet share histing public folder will be different

### Frontend

**If folder 'public/assets'**
Now all frontent containe in 'assets/' fodler but will be migarted to 'typo3conf/ext/navadach/Resources/Public' as soon as ready.

**Build with docker**

```
cd projectputh
docker-compose up -d
docker exec -i project_frontend bash 
grunt
```

Notice: if on client's hosting imposible run 'grunt', need build assets (css/js) on developer machine and pull files to git repository for transfer in live (git add force).

### Installation

```
cd projectputh
docker-compose up -d
```

Then open php container and install TYPO3 

```
docker exec -i project_frontend composer install
```
or in bash

Then import DB

```
cd projectputh
cd DB/db.sql | docker exec -i tbw_theme_mysql /usr/bin/mysql -u typo3 --password=typo3 typo3
```

Build frontend
```
docker exec -i project_frontend bash 
grunt
```

#### Step 2

Follow installation guide and use following database information:

|  |  |
|----------|------------|
| Username | typo3 |
| Password | typo3 |
| Host | nova_mysql |
| Port | 3306 |

Use AdditionalConfiguration.php file from 'typo3conf/ext/project/install/'/ Example for developer server

```
cd projectputh
cp public/typo3conf/ext/project/install/AdditionalConfiguration.php  public/typo3conf/
cp public/typo3conf/ext/project/install/ENABLE_INSTALL_TOOL  public/typo3conf/
```

#### Step 3

Build Frontend

```
cd projectputh
docker exec -i project_frontend bash
npm i
grunt
```

#### Step 4

Import DB

```
cat db.sql | docker exec -i project_mysql /usr/bin/mysql -u typo3 --password=typo3 typo3
```

#### Step 5

Go to http://localhost/typo3/install.php
use password `WebAdmin16` for IntsallTool
add you own backend admin user with installtool

#### Step 5

Check constants in TYPO3 template - change `port` and `domain` if needed

#### Step 6 -- Update project

just make git pull from repository
