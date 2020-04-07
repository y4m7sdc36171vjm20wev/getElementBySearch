
// If you implement this script please use a script tag linked to the source file
// Just a small script to search for id and class values
// Created By Josh. Thank you for using my script
// Josh-Hunta.xyz

// search() is what you should use

const searchForID = (phrase) => {
    let arr = [];
    for(let i = 1; i < document.body.innerHTML.split('id="').length; i++){
        if(document.body.innerHTML.split('id="')[i].split('">')[0].search(phrase) != -1){
            arr.push(document.body.innerHTML.split('id="')[i].split('"')[0]);
        }
    }
    for(let i = 1; i < document.body.innerHTML.split("id='").length; i++){
        if(document.body.innerHTML.split("id='")[i].split("'>")[0].search(phrase) != -1){
            arr.push(document.body.innerHTML.split("id='")[i].split("'")[0]);
        }
    }
    return arr;
}
const searchFrameForID = (phrase, frame) =>{
    let results = [];
    if(eval(frame) == undefined){
        console.log("sorry but that frame doesn't exist.");
    }else{

    eval(`

    let arr = [];
    for(let i = 1; i < ${frame}.document.body.innerHTML.split('id="').length; i++){
        if(${frame}.document.body.innerHTML.split('id="')[i].split('"')[0].search(${phrase}) != -1){
            arr.push(${frame}.document.body.innerHTML.split('id="')[i].split('"')[0]);
        }
    }
    for(let i = 1; i < ${frame}.document.body.innerHTML.split("id='").length; i++){
        if(${frame}.document.body.innerHTML.split("id='")[i].split("'>")[0].search(${phrase}) != -1){
            arr.push(${frame}.document.body.innerHTML.split("id='")[i].split("'")[0]);
        }
    }

    results = arr;

    `);

    return results;
}
}

const searchForClass = (phrase) => {
    let arr = [];
    for(let i = 1; i < document.body.innerHTML.split('class="').length; i++){
        if(document.body.innerHTML.split('class="')[i].split('"')[0].search(phrase) != -1){
            arr.push(document.body.innerHTML.split('class="')[i].split('"')[0]);
        }
    }
    for(let i = 1; i < document.body.innerHTML.split("class='").length; i++){
        if(document.body.innerHTML.split("class='")[i].split("'")[0].search(phrase) != -1){
            arr.push(document.body.innerHTML.split("class='")[i].split("'")[0]);
        }
    }
    return arr;
}
const searchFrameForClass = (phrase, frame) =>{
    let results = [];

    if(eval(frame) == undefined){
        console.log("sorry but that frame doesn't exist.");
    }else{

    eval(`

    let arr = [];
    for(let i = 1; i < ${frame}.document.body.innerHTML.split('class="').length; i++){
        if(${frame}.document.body.innerHTML.split('class="')[i].split('"')[0].search(${phrase}) != -1){
            arr.push(${frame}.document.body.innerHTML.split('class="')[i].split('"')[0]);
        }
    }
    for(let i = 1; i < ${frame}.document.body.innerHTML.split("class='").length; i++){
        if(${frame}.document.body.innerHTML.split("class='")[i].split("'")[0].search(${phrase}) != -1){
            arr.push(${frame}.document.body.innerHTML.split("class='")[i].split("'")[0]);
        }
    }

    results = arr;

    `);

    return results;
    }
}

const search = (phrase, frame, option, func) =>{

let allResults = [];
let combine = "";

if(frame == undefined){
    combine = searchForID(phrase).join("@") + "@" + searchForClass(phrase).join("@");
}

if(option == undefined){
    if(frame != undefined && frame != null){
        combine += "@" + searchFrameForClass(`"${phrase}"`, `${frame}`).join("@") + "@" + searchFrameForID(`"${phrase}"`,`${frame}`).join("@");
    }

}else{
    if(option == 0){
        if(frame == undefined){
        combine = searchForID(phrase).join("@") + "@";
        }
        if(frame != undefined && frame != null){
            combine += "@" + searchFrameForID(`"${phrase}"`,`${frame}`).join("@");
        }
    }
    if(option == 1){
        if(frame == undefined){
        combine = searchForClass(phrase).join("@") + "@";
        } 
        if(frame != undefined && frame != null){
            combine += "@" + searchFrameForClass(`"${phrase}"`, `${frame}`).join("@");
        }  
    }
    if(option > 1){
        combine = "Choose 0 for searching 'id' values and 1 for 'class' values.";
    }
}

allResults.push(combine);
allResults = allResults[0].split("@");

let check = "document";

if(frame != undefined && frame != null){
    check = `${frame}.document`;
}

allResults = allResults.sort(function(a,b){
    return a.length - b.length;
});

allResults = allResults.filter(function(e){ return e != "" });

if(option != undefined){
    if(option == 0){
        for(let j = 0; j < allResults.length; j++){
            let a = `${check}.querySelectorAll("#"+allResults[${j}])`;
            if(eval(a) == null){
    
                allResults[j] = "";
            
            }else{
                if(func != undefined){

                    if(func == "click"){
                        eval(a + '.click()');
                    }
                    if(func == "getText"){
                        eval(`console.log(${a}[${j}].innerText)`)
                    }
                    if(func.search("setText") != -1){
                        eval(`${a}[${j}].innerText = "${func.split("@")[1]}"`)
                    }
                    if(func == "item"){
                        return eval(a);
                    }
                    if(func.search(`fun`) != -1){
                        function run(){
                            let item = eval(`${a}[${j}]`);
                            eval(`${func.split("@")[1]}`);
                        }
                        run();
                    }
                }
            }
        }
    }
    if(option == 1){
        for(let j = 0; j < allResults.length; j++){
            let a = `${check}.getElementsByClassName(allResults[${j}])`;
            
            if(eval(a+'.length') == 0){
                    allResults[j] = "";
            }else{
                if(func != undefined){
                    if(func == "click"){
                        eval(a + '[0].click()');
                    }
                    if(func == "getText"){
                        eval(`console.log(${a}[${j}].innerText)`)
                    }
                    if(func.search("setText") != -1){
                        eval(`${a}[${j}].innerText = "${func.split("@")[1]}"`)
                    }
                    if(func == "item"){
                            return eval(a);
                    }
                    if(func.search(`fun`) != -1){
                        function run(){
                            let item = eval(`${a}[${j}]`);
                            eval(`${func.split("@")[1]}`);
                            return true;
                        }
                        run();
                    }
                }
            }
        }
    }

}

return allResults;

}



        // usage
        // search("ID", null, 0); 

        // search( "phrase", "frame" (null for none), 0(id) or 1(class) ) 

        // search("CLASS", null, 1);
        // search("ID or CLASS");
        // search("ID or CLASS", "frames[0]");
        // search("ID", "frames[0]", 0);
        // search("CLASS", "frames[0]", 1);
        // frames[0].document.getElementById(search("ID", "frames[0]", 0));
        // frames[0].frames[0].document.getElementsByClassName(search("ID", "frames[0].frames[0]", 0));

        // Please include the first three parameters to make sure your search is as accurate as possible (it will double check it for you)

        // 4th parameter can be "click" (click all that matches search) or "getText" (will get inner text from all that matches search)
        // or "setText" for setting text
        // the 4th parameter can also be set to "item", you can test it out to see what it does. 
        //
