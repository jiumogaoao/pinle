var socket = io("https://127.0.0.1:8888");
        socket.on('connected', function (data) {
            socket.emit('server',{model:"user",action:"regest",data:{userName:"mouren",phone:"18520408028",key:"123456"}});
        });
        socket.on('regest',function(data){
            console.log(data)
        });
        socket.on('err',function(data){
            console.log(data)
        })