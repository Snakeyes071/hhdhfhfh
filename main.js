nameofthestudentarray= [];

function submit() {
    var displaystudentarray=[];
    for (var s=1;s<=4;s++){
    var nameofthestudent=document.getElementById("name_of_the_student_"+s).value;
    console.log(nameofthestudent);
    nameofthestudentarray.push(nameofthestudent);}
    console.log(nameofthestudentarray);
    var lengthofthenameofthestudentarray=nameofthestudentarray.length;
    console.log(lengthofthenameofthestudentarray);
    for (var k=0;k<lengthofthenameofthestudentarray;k++){
        displaystudentarray.push(" NAME- "+ nameofthestudentarray[k] + "</h4>");
    console.log(displaystudentarray);
    }
    console.log(displaystudentarray);
    document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;
    var remove_commas=displaystudentarray.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
    }
    function sorting() {
        nameofthestudentarray.sort();
        console.log(nameofthestudentarray);
        var displaystudentarraysorting=[];
        var lengthofthenameofthestudentarray=nameofthestudentarray.length;
    console.log(lengthofthenameofthestudentarray);
    for (var k=0;k<lengthofthenameofthestudentarray;k++){
    displaystudentarraysorting.push("<h4> NAME-"+ nameofthestudentarray[k] + "</h4>");
    console.log(displaystudentarraysorting);
    }
    var remove_commas=displaystudentarraysorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    }