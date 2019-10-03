({
    responseCallback: function (response, callback) {
        if (response.getState() === "ERROR") {
            console.log(response.getError());
            callback('Error');
        }
        else {
            var respObject = response.getReturnValue();

            if (respObject.IsSuccess)
                callback(null, respObject.Data);
            else
                callback(respObject.Message);
        }
    } 
})