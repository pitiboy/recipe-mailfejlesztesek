#!/bin/sh
mkdir ~/Library/"Application Support"/Franz/recipes/dev/recipe-mailfejlesztesek
cp -f ./*.png ./*.svg ./*.json ./*.js ~/Library/"Application Support"/Franz/recipes/dev/recipe-mailfejlesztesek

echo
echo deployed WebmailFejlesztesek recipe for Franz 'dev'
echo Restart Fanz app for new plugin install!
echo
