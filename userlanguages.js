users = [
        {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
    ]

function userLanguages(arr){
    for (var i=0; i,arr.length; i++){
        str1= arr[i]['fname']+ " " +arr[i]['lname']+" knows "
        str2= arr[i]['fname']+ " " +arr[i]['lname']+" is also interested in " 

        for (var j=0; j<arr[i]['languages'].length; j++){
            if(arr[i]['languages'].length==1){
                str1 += arr[i]['languages'] + ". ";
            }
            else if(j==arr[i]['languages'].length-1){
                str1 += ", and " + arr[i]['languages'][j] + ".";
            }
            else if(j==0){
                str1 += arr[i]['languages'][j]
            }
            else {
                str1 += ", " + arr[i]['languages'][j]
            }
        }
        for (key in arr[i]['interests']){
            for(var k=0; k<arr[i]['interests'][key].length; k++){
                if(k == arr[i]['interests'][key].length - 1) {
                    str2 += arr[i]['interests'][key][k] +". ";
        
                }
                else{
                    str2 +=arr[i]['interests'][key][k]+ ", ";
                }
            }
        }
    console.log(str1);
    console.log(str2);
    console.log("\n");
    }
}

userLanguages(users);
