/* 
* @Author: hanjiyun
* @Date:   2014-03-10 14:01:35
* @Last Modified by:   hanjiyun
* @Last Modified time: 2014-03-13 14:13:53
*/

$(function(){
    $('.ui.accordion').accordion();
    $('.ui.checkbox').checkbox();
    $('.ui.dropdown').dropdown({
        on : 'click',
        delay: {
            show: 0,
            hide: 0
        },
        transition: 'fade',
        duration: 100,
    });
    $('.ui.dropdown .dropdown').dropdown({
        on : 'hover',
        delay: {
            show: 0,
            hide: 200
        },
        transition: 'fade',
        duration: 100,
    });



    var checked = false;
    var table = $('#content table');
    var checkboxs = table.find('input[name="fun"]');
    var idList = [];

    // checkbox
    $('#checkall').click(function(){
        var $t = $(this);
        if(checked){
            $t.find('i').removeClass('checked').addClass('empty');
            $t.addClass('checked');
            $t.find('span').html('全部选择');
            checkboxs.prop('checked', '');
            $('.controlbar > .buttons').hide();
            checked = false;
        } else {
            $t.find('i').addClass('checked').removeClass('empty');
            $t.removeClass('checked');
            $t.find('span').html('取消选择');
            checkboxs.prop('checked', 'checked');
            $('.controlbar > .buttons').css('display', 'inline-block');
            checked = true;
        }
    })

    checkboxs.change(function(){
        var $t = $(this),
            id = $t.data('id');
        if($t.prop('checked') === true){
            // console.log('选中');
            $t.parents('tr').eq(0).addClass('warning');
            idList.push(id);
            $('.controlbar > .buttons').css('display', 'inline-block');
            console.log($('#content .table input[checked="checked"]').size())
        } else {
            // console.log('取消选中');
            $t.parents('tr').eq(0).removeClass('warning');
            console.log($('#content .table input[checked="checked"]').size())
            if($('#content .table input[checked="checked"]').size() > 0) return;
            $('.controlbar > .buttons').hide();
        }
    })
})


