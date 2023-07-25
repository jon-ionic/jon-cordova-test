#!/bin/bash

find plugins -name "package.json" -exec sh -c 'echo "{}:" && grep version "{}"' \;