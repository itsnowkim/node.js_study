const fs = require('fs');

//test.txt 파일을 쓸 수 있게 핸들을 엽니다.

fs.open('test.txt','w',(err,fd)=>{
    //실패 시에는 err를 리턴, 성공 시에는 fd라는 핸들을 리턴.
    if(err) throw err;

    fs.write(fd,"hello world", (err,written)=>{
        //실패 시에는 err를 리턴, 성공 시에는 기록된 바이트 수를 리턴.
        if(err) throw err;
        console.log(written + "bytes Written");

        fs.close(fd,()=>{
            console.log('Done');
        });
    });
});