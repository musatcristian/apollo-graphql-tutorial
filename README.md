# Odyssey Lift-off I: Basics

Welcome to the companion app of Odyssey Lift-off I! You can [find the course lessons and instructions on Odyssey](https://odyssey.apollographql.com/lift-off-part1), Apollo's learning platform.

You can [preview the completed demo app here](https://odyssey-catstronauts.netlify.app/).

## How to use this repo

The course will walk you step by step on how to implement the features you see in the demo app. This codebase is the starting point of your journey!

There are 3 main folders:

- `server`: The starting point of our GraphQL server.
- `client`: The starting point of our React application.
- `final`: The final stage of both the server and client folders, with all of the steps and code completed!

To get started:

1. Navigate to the `server` folder.
1. Run `npm install`.
1. Run `npm start`.

This will start the GraphQL API server.

In another terminal window,

1. Navigate to the `client` folder.
1. Run `npm install`.
1. Run `npm start`.

This will open up `localhost:3000` in your web browser.

## Getting Help

For any issues or problems concerning the course content, please refer to the [Odyssey topic in our community forums](https://community.apollographql.com/tags/c/help/6/odyssey).

##### GIT CONFIG examples
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	ignorecase = true
	precomposeunicode = true
[remote "remote-github"]
	# url = git@github.com:musatcristian/cla-lessons.git
	url = git@personal:musatcristian/cla-lessons.git
	fetch = +refs/heads/*:refs/remotes/remote-github/*
[user]
	name = Cristian Musat
	email = cristutz00@gmail.com
	signingkey = /Users/cristianmusat/.ssh/cristutz_github.pub
[pull]
	ff = only
[gpg]
	format = ssh
[branch "main"]
	remote = remote-github
	merge = refs/heads/main



[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	ignorecase = true
	precomposeunicode = true
[remote "remote-origin"]
	url = git@personal:musatcristian/apollo-graphql-tutorial.git
	fetch = +refs/heads/main:refs/remotes/remote-origin/main
[user]
	name = Cristian Musat
	email = cristutz00@gmail.com
	signingkey = /Users/cristianmusat/.ssh/cristutz_github.pub
[pull]
	ff = only
[gpg]
	format = ssh
[branch "main"]
	remote = remote-origin
	merge = refs/heads/main
[branch "setup/add-rest-data-source"]
	remote = remote-origin
	merge = refs/heads/setup/add-rest-data-source

