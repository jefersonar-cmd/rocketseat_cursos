//var xhr = new XMLHttpRequest();

//xhr.open('GET', 'https://api.github.com/users/jefersonar-cmd');
//xhr.send(null);

//xhr.onreadystatechange = function() {
//    if(xhr.readyState == 4){
//        console.log(JSON.parse(xhr.responseText));
//    }
//}

//var minhaPromese = function(){
//    return new Promise(function(resolve, reject){
//        var xhr = new XMLHttpRequest();
//        xhr.open('GET', 'https://api.github.com/users/jefersonar-cmd');
//        xhr.send(null);

//        xhr.onreadystatechange = function(){
//            if(xhr.readyState === 4){
//                if(xhr.status === 200){
//                    resolve(JSON.parse(xhr.responseText));
//                }else{
//                    reject('Erro na Requisição');
//                }
//            }
//        }
//    });
//}

axios.get('https://api.github.com/users/jefersonar-cmd')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });