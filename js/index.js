var socket = io("http://192.168.1.139:8888");
        socket.on('connected', function (data) {
            console.log(data);
            if(localStorage.getItem('tk')){
                socket.emit('tk',{tk:localStorage.getItem('tk')});
            }
            //socket.emit('server',{model:"user",action:"login",data:{userName:"moureAn",phone:"18520408028",key:"123456"}});
        });
        socket.on('tk',function(data){
            if(data.tk){
                localStorage.setItem('tk',data.tk);
                socket.emit('server',{model:"user",action:"recharge",data:{money:1}});  
            }else{
                localStorage.removeItem('tk');
            }
        });
        socket.on('regest',function(data){
            console.log(data)
        });
        socket.on('login',function(data){
            console.log(data);
        });
        socket.on('balance',function(data){
            console.log(data)
        });
        socket.on('err',function(data){
            console.log(data)
        })