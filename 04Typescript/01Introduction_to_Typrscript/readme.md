
<!-- First we need to install Typescript compiler -->
1: npm install -g typescript
2: tsc --version

<!-- How to run TS file -->
tsc file_name
tsc yourfile.ts --target es2016

<!-- Intialize config file -->
tsc --init

<!-- run tsc -->

<!-- Every JS file will be valid TS -->
<!-- If there is an error in TS, still it will compile it and convert it into JS file -->
<!-- It will be on the user how to tackle it -->


<!-- watch mode -->
tsc --watch

<!-- How to quit it -->
ctrl+C


<!-- How to deal with number -->
let age:number = 30;

<!-- How to deal with string -->
let name: string = "Alice";

<!-- How to deal with bigint -->
let largeNumber: bigint = 123456789012345678901234567890n;

<!-- How to deal with boolean -->
let isActive: boolean = true;

<!-- How to deal with undefined -->
let value: undefined;

<!-- How to deal with null -->
let value: null = null;







