$(document).ready(function() {

    $(function() {
        $('#select').change(function(){
            $('.gethidden').hide();
            $('#' + $(this).val()).show();
        });
    });

     $(function() {
        $('#select-one').change(function(){
            $('.gethidden-x').hide();
            $('.wine').hide();

            $('#' + $(this).val()).show();
        });
    });
    

}); 