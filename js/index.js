var socket = io("http://192.168.1.139:8888");
        socket.on('connected', function (data) {
            socket.emit('server',{model:"user",action:"regest",data:{userName:"moureAn",phone:"18520408028",key:"123456"}});
        });
        socket.on('regest',function(data){
            alert(JSON.stringify(data))
        });
        socket.on('login',function(data){
            alert(data)
        });
        socket.on('err',function(data){
            alert(data)
        })