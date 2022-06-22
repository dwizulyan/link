$.ajax({
    type: "get",
    url: "./data/link.json",
    dataType: "json",
    success: function (response) {
        let delay = 0
        $.each(response, function (i, data) {
            let newdelay = (delay += 1) - 1;

            if(data['status'] !== 'off'){
                $('.main').append(`
                <a style="animation-delay:.${newdelay}s" class="${data['status']} " href="${data['link']}">
                <div class="links">
                    ${data['name']}
                </div>
                </a>`)
            }
            else{
                $('.main').append(`
                <a style="animation-delay:.${newdelay}s" class="${data['status']} " href="#">
                <div class="links">
                    ${data['name']}
                </div>
                </a>`)
            }
            

            
             
        });
    }
});

$.ajax({
    type: "get",
    url: "./data/japanese.json",
    dataType: "json",
    success: function (response) {
        let delay = 0
        $.each(response, function (i, data) {
            let newdelay = (delay += 1) - 1;

            $('.japanese-text').append(`
            <h1 style="animation-delay:.${newdelay}s">${data['text']}</h1>`)
             
        });
    }
});