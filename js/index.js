$(document).ready(function (e){
    jQuery.validator.addMethod("ten", function(value, element){
        return this.optional(element) || /^[A-Z][a-z]+$/.test(value);
    }, "Phai nhap dung ten!");

    $("#fr").validate({
        rules:{
            txtMS:{
                required:true,
                digits:true,
                rangelength:[8,8],
            },
            txtTen:{
                required:true,
                ten:false,
            },
            txtLop:{
                required:true,
                lop:false,
            },
            txtEmail:{
                required:true,
                email:true,
            }
        },
        messages:{
            txtMS:{
                required:"Phai nhap!",
                digits:"Ma so chi chua so!",
                rangelength:"Ma co 8 so!",
            },
            txtTen:{
                required:"Phai nhap!",
            },
            txtLop:{
                required:"Phai nhap!",
            },
            txtEmail:{
                required:"Phai nhap!",
                email:"Phai nhap dung kieu email!",
            }
        }
    });
    var stt = 1;
    $("#fr").submit(function(e){
        if($("#fr").valid()){
            var row = "<tr><td>"+stt+"</td>";
            row = row+"<td>"+$("#txtMS").val()+"</td>";
            row = row+"<td>"+$("#txtTen").val()+"</td>";
            row = row+"<td>"+$("#txtLop").val()+"</td>";
            row = row+"<td>"+$("#txtEmail").val()+"</td><tr>";
            $("#tblSV").append(row);
            stt++;
            return false;
        }
        return false;
    });
});