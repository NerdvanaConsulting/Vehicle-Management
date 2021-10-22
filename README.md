# Vehicle-Management
- Application in preliminary development stage
# Branch usage:

| Branch | Purpose | Merges into | Accepts Merges from | Remarks |
|-------|--------|---------|----------|-------|
|master|Release/Production| | Pre-release Testing, hotfix | Production / release branch - ONLY stable commits|
|research-X| good idea fairy/futures |development |development |this branch must be buildable before commmitting to development. |
|pre-release| |master, development | development | transition branch to perform final testing prior to release to the master. |
|development| Main development build line |features, pre-release |master, pre-release, testing | Anything committed to this branch must build, although it may not be stable. |
|testing| Testing normal and error-releated issues | development, pre-release | hotfix, feature | All potentially buildable solutions must be tested |
|hotfix|Errors / Bugs| development, master|master| This branch is strictly for issues that arise / are identified within tagged releases|
|feature-X| Major application features |issues, testing |development, issues | features must be buildable and tested prior to merging into development. |
|issue-##| requirements tied to features |feature | feature |these branch from individual features, and merge only to the feature from which they were branched |
