var fs = require('fs');
var fetch = require('node-fetch');


const imgDatas = require('../data/img/imgData.json');



exports.getImgNo = function(){
    const filelist = fs.readdirSync('./data/img/imgs');
    const randomNo = Math.floor(Math.random()*(filelist.length)+1);
    return randomNo;
};

exports.getImgData = function(imgNo){
    return imgDatas[imgNo];
};

exports.getChoices = async function(choices,imgData){
    for (i=1; i<5; i++){
        await fetch("http://www.boredapi.com/api/activity/")
            .then((response)=>response.json())
            .then((data_)=>{
                let count = 0;
                if (data_.type === imgData.type){
                    count++;
                };

                if (data_.participants ===1 && imgData.participants ===1){
                    count++;
                } else if (data_.participants !==1 && imgData.participants !==1){
                    count++;
                };

                if (data_.price<=0.5 && imgData.price<=0.5){
                    count++;
                } else if(data_.price>0.5 && imgData.price>0.5){
                    count++;
                };
                const input = {};
                input.activity = data_.activity;
                input.score = count;
                choices[i] = input;
            })
    }
    

    
}