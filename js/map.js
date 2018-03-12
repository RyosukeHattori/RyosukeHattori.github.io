//マウスオーバーで情報ウィンドウを表示させる
function map_canvas() {
    //マーカーの情報
    var data = new Array();
    data.push({
        lat: '35.652003', //緯度
        lng: '139.543839', //経度
        content: 'Chofu Station<br />depart from entrance of Torie ' //情報ウィンドウの内容
    });
    data.push({
        lat: '35.640064',
        lng: '139.544720',
        content: '<p style="color:#d50000">Cort of C,D</p>'
    });
    //初期位置に、上記配列の最初の緯度経度を格納
    var latlng = new google.maps.LatLng(data[0].lat, data[0].lng);
    var opts = {
        zoom: 14,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), opts);

    var markers = new Array();
    //マーカーを配置するループ
    for (i = 0; i < data.length; i++) {
        markers[i] = new google.maps.Marker({
            position: new google.maps.LatLng(data[i].lat, data[i].lng),
            map: map
        });
        markerInfo(markers[i], data[i].content);
    }
}

function markerInfo(marker, name) {
    google.maps.event.addListener(marker, 'mouseover', function (event) {
        new google.maps.InfoWindow({
            content: name
        }).open(marker.getMap(), marker);
    });
}

//地図描画を実行
google.maps.event.addDomListener(window, 'load', map_canvas);