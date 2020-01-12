#!/usr/bin/fish
if test (count $argv) -lt 1
	echo Download all images of a chapter in current directory
	echo Usage: (status -f) URL
	echo Example: (status -f) https://rawdevart.com/comic/comic-name/chapter-1/
	exit 2
end >&2

node (dirname (status -f))/fetch.js $argv[1] | xargs -L 1 -P 999 wget -q
