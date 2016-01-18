var map;

//地图初始化加载
function init()
{
    var bounds = new OpenLayers.Bounds(109.62468672071573, 20.061844970906243,
                        117.35435946391824, 25.528473333333334);//地图的边界
    var options = {
        projection: "EPSG:4326",

        minResolution: "auto",
        maxResolution: "auto",

        numZoomLevels: 20,
        center: new OpenLayers.LonLat(113, 23)
    };


    map = new OpenLayers.Map('map', options);

    var group = new OpenLayers.Layer.WMS("group",
              //geoserver所在服务器地址  this id is not existed
              "http://211.111.111.111:8090/geoserver/guangdong/wms",
              {
                  layers: "guangdong",
                  transparent: "true"
              },
               { isBaseLayer: true }
            );
    map.addLayer(group);
    
    map.zoomToExtent(bounds);//将地图
}


$(function () {
    init();
})


