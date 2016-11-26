// function getTempCallBack(location, callback){
// 	callback(undefined, 78);
// 	callback("City is not found");
// }

// getTempCallBack("Panama", function(error, temp){

// 	if (error){
// 		console.log("Error", error);
// 	}else{
// 		console.log("Success", temp);
// 	}

// });

// function getTempPromise(location){
// 	return new Promise(function(resolve, reject){
// 		setTimeout(function(){
// 			resolve(79);
// 			reject("City not found");
// 		}, 1000);
// 	});
// }

// getTempPromise("Panama").then(function(temp){
// 	console.log("Promise success", temp);
// }, function(error){
// 	console.log("Promise error", error);
// });

// Challenge Area::

function addPromise(a,b){
	return new Promise(function(resolve, reject){
		if ((typeof a === "number") && (typeof b === "number")){
			resolve(a + b);
		}else{
			reject("Any of the parameters was not a number.");
		}
	});
}

addPromise(2, 10).then(function(result){
	console.log("The add is equal to: ", result);
}, function(error){
	console.log(error);
})