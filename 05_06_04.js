const { Buffer } = require('buffer');
const fs = require('fs');

//test.txt 파일을 쓸 수 있게 핸들을 엽니다.
fs.open ('test.txt', 'a' , (err, fd)=>{
    //실패 시 err 리턴, 성공 시 fd라는 핸들 리턴
    if(err) throw err;

    //파일에 쓰기를 수행
    fs.write(fd, "Update", {offset : 4} ,( err , written )=>{
        //실패 시 err를 리턴, 성공 시 기록된 바이트 수를 리턴
        if(err) throw err;

        console.log(written + "bytes Written");

        fs.close(fd,()=>{
            console.log('Done');
        });
    });
});
