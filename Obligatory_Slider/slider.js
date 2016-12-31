/**
 * Created by Sadjad on 4/26/2016.
 */

(function($){ // self invoking function, $ refers to jQuery
    // define variables
    var sliderUL = $('div.main').children('ul'), //the list element
        imgs = sliderUL.find('img'), // images in ul
        imgWidth = imgs[0].width,//the width of any image, in this case:600
        imgsLen = imgs.length,//the number of images, in this case:4
        current = 1; // the current image shown

    //when clicked the arrows changes the image
    $('div.arrows').on('click', function(){
        // which arrow is clicked
        var type = $(this).attr('id');

        //update current value
        if(type === 'right_arrow'){
            current = current%imgsLen + 1;
        } else {
            current = (current + imgsLen - 1)%imgsLen;
            if(current === 0)
                current = 4;
        }

        sliderUL.animate({
            'margin-left' : -imgWidth *(current - 1)
        }, 600);
    });
})(jQuery);

