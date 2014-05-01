#!C:\cygwin64\bin\bash.exe

protocol="javascript:"
code=$(cat easy_ezproxy_readable.js | tr -d '\011\012\015' | C:/Users/Greg/utf8.pl)

sed 8s/.*/$protocol$code/ README_empty.md > README.md
