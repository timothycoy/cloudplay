#!/bin/bash

sudo diskutil umount force apps/kerbal/
mkdir apps/kerbal
sudo mount 172.16.100.197:/cloudplay/kerbal apps/kerbal/
./apps/kerbal/KSP_osx/KSP.app/Contents/MacOS/KSP
