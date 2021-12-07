#!/usr/bin/env node
// const wcat = require('wcat');
const fs = require('fs')

let inputArr = process.argv.slice(2);
// console.log(inputArr);

//? Acc. to tasks - we've to identify options & filenames separtely

let optionsArr = []
let filesArr = []

//!Identifying -> options - starts with dash(-)
for(let i=0;i<inputArr.length;i++){
    let firstChar = inputArr[i].charAt(0);
    if(firstChar == "-"){
        optionsArr.push(inputArr[i]);
    }else{
        filesArr.push(inputArr[i]);
    }
}

//TODO Dealing with Edge Cases

//? Is Both Present
let isBoth = optionsArr.includes("-n") && optionsArr.includes("-b")
if(isBoth){
    console.log("Either enter -n or -b option");
    return;
}

//? Is File Exists
for(let i=0;i<filesArr.length;i++){
    let isExists = fs.existsSync(filesArr[i])
    if(!isExists){
        console.log(`${filesArr[i]} is not present`);
        return
    }
}

// read files
let content = ""
for(let i=0;i<filesArr.length;i++){
  //! readFileSync - return content of path as buffer
  let bufferContent = fs.readFileSync(filesArr[i]);
  content += bufferContent + "\r\n"; 
  //"\r" is a carriage return which often means that the cursor should move to the leftmost column
}
// console.log(content);
let contentArr = content.split("\r\n")
// console.log(contentArr);

//TODO -s 
let isS = optionsArr.includes("-s")
if(isS){
    // ? we'have left the first space line, & making rest space lines as null, & later removing them
    for(let i=1;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i-1]=="") {
            contentArr[i] = null
        }else if(contentArr[i]=="" && contentArr[i-1]==null){
            contentArr[i] = null
        }
    }
    let tempArr = []; // this array for only nonempty string & 1 space line
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i] != null){
            tempArr.push(contentArr[i])
        }
    }
    contentArr = tempArr
}
// console.log(contentArr.join("\n"));

//TODO -n
let isN = optionsArr.includes("-n")
if(isN){
    for(let i=0;i<contentArr.length;i++){
        contentArr[i]=`${i+1} ${contentArr[i]}`
    }
}
// console.log(contentArr.join("\n"));

//TODO -b
let isB = optionsArr.includes("-b")
if(isB){
    let counter = 1
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=""){
            contentArr[i] = `${counter} ${contentArr[i]}`
            counter++;
        }
    }
}
console.log(contentArr.join("\n"));

//! Don' need to do anything for ">" && ">>", as they are inbuilt CLI commands