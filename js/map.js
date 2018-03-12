//�}�E�X�I�[�o�[�ŏ��E�B���h�E��\��������
function map_canvas() {
    //�}�[�J�[�̏��
    var data = new Array();
    data.push({
        lat: '35.652003', //�ܓx
        lng: '139.543839', //�o�x
        content: 'Chofu Station<br />depart from entrance of Torie ' //���E�B���h�E�̓��e
    });
    data.push({
        lat: '35.640064',
        lng: '139.544720',
        content: '<p style="color:#d50000">Cort of C,D</p>'
    });
    //�����ʒu�ɁA��L�z��̍ŏ��̈ܓx�o�x���i�[
    var latlng = new google.maps.LatLng(data[0].lat, data[0].lng);
    var opts = {
        zoom: 14,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), opts);

    var markers = new Array();
    //�}�[�J�[��z�u���郋�[�v
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

//�n�}�`������s
google.maps.event.addDomListener(window, 'load', map_canvas);