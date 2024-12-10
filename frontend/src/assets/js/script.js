function checkRegistrationNo(){
    var registration_no = $('#registration_no').val();
    //$('.sppan').hide();
    if(registration_no!=''){
        $.ajax({
            url: 'ajax.php',
            type:'post',
            data:{registration_no:registration_no,action:'checkRegistrationNo'},
            cache: false,
            success:function(data){
                data = JSON.parse(data);
                if(data.status==true){
                    $('#submit').prop('disabled',false);
                }else{
                    //$('#registration_no_error').html(data.msg).show();
                    toastr.error(data.msg);   
                    $('#submit').prop('disabled',true);
                }
            }
        });    
    }
}

$('#success_msg').fadeOut(8000);
$('#error_msg').fadeOut(8000);

$(".numbered").keydown(function (e) {
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
        (e.keyCode >= 35 && e.keyCode <= 40)) {
            return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});

$('#country').change(function(){
    var country_id = $(this).val();
    if(country!=''){
        $.ajax({
            url: 'ajax.php',
            type:'post',
            data:{country_id:country_id,action:'get_state'},
            cache: false,
            success:function(data){
                $('#state_div').html(data);
            }
        });    
    }
});

function getState(){
    var country_id = $('#country').val();
    if(country!=''){
        $.ajax({
            url: 'ajax.php',
            type:'post',
            data:{country_id:country_id,action:'get_state'},
            cache: false,
            success:function(data){
                $('#state_div').html(data);
            }
        });    
    }
}

getState();