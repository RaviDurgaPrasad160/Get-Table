$(document).ready(function () {
    $('#btn').click(function () {
        let tab = $('#inp').val();
        tab = Number(tab);
        getTable(tab);
        let ul = getTable(tab)
         $('#out').html(ul);
        $('#out').css('padding', '25px 0px 30px 50px')
    })
})

function getTable(num) {
    let res = '<ul>\n'
    for(let i=1; i<=10; i++){
         res += '<li>'+num+ ' x '+ i +' = '+ num*i+'</li>\n'
    }
    res += '</ul>'
    return res;
}
