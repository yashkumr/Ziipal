//Pay Amount
jQuery(document).ready(function($){

    jQuery('#paynow').click(function(e){

        var paymentOption = '';
        var travel_date = $('#package_booking_date').val();
        var name =  $('#package_booking_name').val();
        var email = $('#package_booking_email').val();
        var contact_no = $('#package_booking_contact_no').val();
        var adults = $('#package_booking_adults').val();
        var package_id =  $("#package_id").val();
        var package_name =  $("#package_name").val();
        var package_price = $("#package_price").val();
        var request_url = 'razorpay-payment.php';
        var paymentOption = "netbanking";
        var payAmount = package_price * adults;

        var reg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
        var filter = /^[0-9-+]+$/;

        if(travel_date == ''){
            toastr.error('Please choose travel date.');
            $('#package_booking_date').focus();
            return false;
        }
        if(name == ''){
            toastr.error('Please enter name.');
            $('#package_booking_name').focus();
            return false;
        }
        if(email == ''){
            toastr.error('Please enter email.');
            $('#package_booking_email').focus();
            return false;
        }
        if(!reg.test(email)){
            toastr.error('Please enter valid email.');
            $('#package_booking_email').focus();		
            return false;
        }
        if(contact_no == ''){
            toastr.error('Please enter contact number.');
            $('#package_booking_contact_no').focus();
            return false;
        }
        if(!filter.test(contact_no)){
            toastr.error('Please enter valid contact number.');
            $('#package_booking_contact_no').focus();
            return false;
        }
        if(contact_no.length<10){
            toastr.error('Contact number is not less than 10 digits.');
            $('#package_booking_contact_no').focus();
            return false;
        }
        if(contact_no.length>14){
            toastr.error('Contact number is not greater than 14 digits');
            $('#package_booking_contact_no').focus();
            return false;
        }
        if(adults == ''){
            toastr.error('Please enter number of adults.');
            $('#package_booking_adults').focus();
            return false;
        }
        
        var formData = {
            travel_date:travel_date,
            name:name,
            email:email,
            contact_no:contact_no,
            adults:adults,
            package_id:package_id,
            package_name:package_name,
            package_price:package_price,
            paymentOption:paymentOption,
            payAmount:payAmount,
            action:'bookNow'
        }
        
        if(travel_date!='' && name!='' && email!='' && contact_no!='' && adults!=''){
            $('#paynow').html('<i class="fa-solid fa-spinner"></i> Please wait...');
            $('#paynow').attr('disabled',true);

            $.ajax({
                type: 'POST',
                url:request_url,
                data:formData,
                dataType: 'json',
                encode:true,
            }).done(function(data){

                if(data.res=='success'){
                    var orderID=data.order_number;
                    var orderNumber=data.order_number;
                    var options = {
                        "key": data.razorpay_key, // Enter the Key ID generated from the Dashboard
                        "amount": data.userData.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                        "currency": "INR",
                        "name": "Shine Airways", //your business name
                        "description": data.userData.description,
                        "image": "https://shineairways.com/assets/images/icon/shine-logo.png",
                        "order_id": data.userData.rpay_order_id, //This is a sample Order ID. Pass 
                        "handler": function (response){
                            window.location.replace("payment-success.php?oid="+orderID+"&rp_payment_id="+response.razorpay_payment_id+"&rp_signature="+response.razorpay_signature+"&pg=tour");
                        },
                        "modal": {
                            "ondismiss": function(){
                                $('#paynow').html('Book Now');
                                $('#paynow').attr('disabled',false);
                                deleteBooking(data.booking_session_id);
                            }
                        },
                        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                            "name": data.userData.name, //your customer's name
                            "email": data.userData.email,
                            "contact": data.userData.contact_no //Provide the customer's phone number for better conversion rates 
                        },
                        "notes": {
                            "address": "Shine Airways"
                        },
                        "config": {
                            "display": {
                                "blocks": {
                                    "banks": {
                                    "name": 'Pay using '+paymentOption,
                                    "instruments": [
                                        {
                                            "method": paymentOption
                                        },
                                        ],
                                    },
                                },
                                "sequence": ['block.banks'],
                                "preferences": {
                                    "show_default_blocks": true,
                                },
                            },                          
                        },
                        "theme": {
                            "color": "#3399cc"
                        }
                    };

                    var rzp1 = new Razorpay(options);
                    rzp1.on('payment.failed', function (response){
                        window.location.replace("payment-failed.php?oid="+orderID+"&reason="+response.error.description+"&paymentid="+response.error.metadata.payment_id+"&pg=tour");
                    });
                    rzp1.open();
                    e.preventDefault(); 
                }

            });

        }
    });
    
    
    //Proceed to payment start here
    jQuery('#proceed_to_payment').click(function(e){

        var paymentOption = '';
        var name =  $('#package_booking_name').val();
        var email = $('#package_booking_email').val();
        var contact_no = $('#package_booking_contact_no').val();
        //var adults = $('#package_booking_adults').val();
        var package_name =  $("#package_name").val();
        var package_price = $("#package_price").val();
        var address = $('#address').val();
        var country = $('#country').val();
        var state = $('#state').val();
        var city = $('#city').val();
        var pincode = $('#pincode').val();
        var request_url = 'razorpay-payment.php';
        var paymentOption = "netbanking";
        var payAmount = package_price;
        //var payAmount = package_price * adults;

        var reg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
        var filter = /^[0-9-+]+$/;

        if(name == ''){
            toastr.error('Please enter name.');
            $('#package_booking_name').focus();
            return false;
        }
        if(email == ''){
            toastr.error('Please enter email.');
            $('#package_booking_email').focus();
            return false;
        }
        if(!reg.test(email)){
            toastr.error('Please enter valid email.');
            $('#package_booking_email').focus();		
            return false;
        }
        if(contact_no == ''){
            toastr.error('Please enter contact number.');
            $('#package_booking_contact_no').focus();
            return false;
        }
        if(!filter.test(contact_no)){
            toastr.error('Please enter valid contact number.');
            $('#package_booking_contact_no').focus();
            return false;
        }
        if(contact_no.length<10){
            toastr.error('Contact number is not less than 10 digits.');
            $('#package_booking_contact_no').focus();
            return false;
        }
        if(contact_no.length>14){
            toastr.error('Contact number is not greater than 14 digits');
            $('#package_booking_contact_no').focus();
            return false;
        }
        if(address == ''){
            toastr.error('Please enter address.');
            $('#address').focus();
            return false;
        }else if(country == ''){
            toastr.error('Please select country.');
            $('#country').focus();
            return false;
        }else if(state == ''){
            toastr.error('Please select state.');
            $('#state').focus();
            return false;
        }else if(city == ''){
            toastr.error('Please enter city.');
            $('#city').focus();
            return false;
        }else if(pincode == ''){
            toastr.error('Please enter pincode.');
            $('#pincode').focus();
            return false;
        }
        
        var formData = {
            name:name,
            email:email,
            contact_no:contact_no,
            address:address,
            country:country,
            state:state,
            city:city,
            pincode:pincode,
            package_name:package_name,
            package_price:package_price,
            paymentOption:paymentOption,
            payAmount:payAmount,
            action:'proceed_to_payment'
        }
        
        if(name!='' && email!='' && contact_no!=''){
            $('#proceed_to_payment').html('<i class="fa-solid fa-spinner"></i> Please wait...');
            $('#proceed_to_payment').attr('disabled',true);

            $.ajax({
                type: 'POST',
                url:request_url,
                data:formData,
                dataType: 'json',
                encode:true,
            }).done(function(data){

                if(data.res=='success'){
                    var orderID=data.order_number;
                    var orderNumber=data.order_number;
                    var options = {
                        "key": data.razorpay_key, // Enter the Key ID generated from the Dashboard
                        "amount": data.userData.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                        "currency": "INR",
                        "name": "Shine Airways", //your business name
                        "description": data.userData.description,
                        "image": "https://shineairways.com/assets/images/icon/shine-logo.png",
                        "order_id": data.userData.rpay_order_id, //This is a sample Order ID. Pass 
                        "handler": function (response){
                            window.location.replace("payment-success.php?oid="+orderID+"&rp_payment_id="+response.razorpay_payment_id+"&rp_signature="+response.razorpay_signature+"&pg=package");
                        },
                        "modal": {
                            "ondismiss": function(){
                                $('#proceed_to_payment').html('Book Now');
                                $('#proceed_to_payment').attr('disabled',false);
                                deleteBooking(data.booking_session_id);
                            }
                        },
                        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                            "name": data.userData.name, //your customer's name
                            "email": data.userData.email,
                            "contact": data.userData.contact_no //Provide the customer's phone number for better conversion rates 
                        },
                        "notes": {
                            "address": "Shine Airways"
                        },
                        "config": {
                            "display": {
                                "blocks": {
                                    "banks": {
                                    "name": 'Pay using '+paymentOption,
                                    "instruments": [
                                        {
                                            "method": paymentOption
                                        },
                                        ],
                                    },
                                },
                                "sequence": ['block.banks'],
                                "preferences": {
                                    "show_default_blocks": true,
                                },
                            },                          
                        },
                        "theme": {
                            "color": "#3399cc"
                        }
                    };

                    var rzp1 = new Razorpay(options);
                    rzp1.on('payment.failed', function (response){
                        window.location.replace("payment-failed.php?oid="+orderID+"&reason="+response.error.description+"&paymentid="+response.error.metadata.payment_id+"&pg=package");
                    });
                    rzp1.open();
                    e.preventDefault(); 
                }

            });

        }
    });
    //Proceed to payment end here
});

function deleteBooking(booking_session_id){
    if(booking_session_id != ''){
        $.ajax(
            {
                url: "ajax.php",
                type: "post",
                data: {booking_session_id:booking_session_id,action:"deleteBooking"},
                success: function (data) {
    
                }
            }
        );
    }
}