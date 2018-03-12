
window.onload = function () {
    setTimeout( "autoScroll()", 2000 );
}
var $scrollX = 0;
var $boxWidth = 300;
var $boxCounts = 3;
function autoScroll() {
    var $sampleIFrame = document.getElementById( "sampleIFrame" );
    if( $scrollX <= $boxWidth * ( $boxCounts - 1 ) ){
        $sampleIFrame.contentWindow.scrollTo( ++$scrollX, 0 );
        if( $scrollX % $boxWidth == 0 ){
            setTimeout( "autoScroll()", 2000 );
        }else{
            setTimeout( "autoScroll()", 10 );
        }
    }else{
        var $intervalID = setInterval(
            function(){
                scrollX( --$scrollX );
            },
            1
        );
        function scrollX( $scrollX ) {
            $sampleIFrame.contentWindow.scrollTo( $scrollX, 0 );
            if( $scrollX == 0 ){
                clearInterval( $intervalID );
                setTimeout( "autoScroll()", 2000 );
            }
        }
    }
}
