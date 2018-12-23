# Vehicle-Management
- Application in preliminary development stage
# Branch usage:

| Branch | Purpose | Merges into | Accepts Merges from | Remarks |
|-------|--------|---------|----------|-------|
|master|Release/Production| | | Production / release branch - ONLY stable commits|
|hotfix|Errors / Bugs| development, master|master| This branch is strictly for issues that arise / are identified within tagged releases|
|development| Main development build line |features, pre-release |master, pre-release, features | Anything committed to this branch must build, although it may not be stable. |
|feature-X| Major application features |issues, development |development, issues | features must be buildable prior to merging into development. |
|issue-##| requirements tied to features | | |these branch from individual features, and merge only to the feature from which they were branched |
|research-X| good idea fairy/futures |development |development |this branch must be buildable before commmitting to development. |
|pre-release| |master, development | development | transition branch to perform final testing prior to release to the master. |

