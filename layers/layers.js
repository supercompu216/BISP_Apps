ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([6606066.498618, 2783387.384396, 8798629.460585, 3836371.808469]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BISPBalOfficesandFocalPersonwithlatitudeandlogitudeMar122026_3 = new ol.format.GeoJSON();
var features_BISPBalOfficesandFocalPersonwithlatitudeandlogitudeMar122026_3 = format_BISPBalOfficesandFocalPersonwithlatitudeandlogitudeMar122026_3.readFeatures(json_BISPBalOfficesandFocalPersonwithlatitudeandlogitudeMar122026_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BISPBalOfficesandFocalPersonwithlatitudeandlogitudeMar122026_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BISPBalOfficesandFocalPersonwithlatitudeandlogitudeMar122026_3.addFeatures(features_BISPBalOfficesandFocalPersonwithlatitudeandlogitudeMar122026_3);
var lyr_BISPBalOfficesandFocalPersonwithlatitudeandlogitudeMar122026_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BISPBalOfficesandFocalPersonwithlatitudeandlogitudeMar122026_3, 
                style: style_BISPBalOfficesandFocalPersonwithlatitudeandlogitudeMar122026_3,
                popuplayertitle: 'BISP Bal Offices and Focal Person with latitude and logitude Mar 12, 2026',
                interactive: true,
                title: '<img src="styles/legend/BISPBalOfficesandFocalPersonwithlatitudeandlogitudeMar122026_3.png" /> BISP Bal Offices and Focal Person with latitude and logitude Mar 12, 2026'
            });
var format_Balochistan_4 = new ol.format.GeoJSON();
var features_Balochistan_4 = format_Balochistan_4.readFeatures(json_Balochistan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Balochistan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Balochistan_4.addFeatures(features_Balochistan_4);
var lyr_Balochistan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Balochistan_4, 
                style: style_Balochistan_4,
                popuplayertitle: 'Balochistan',
                interactive: true,
                title: '<img src="styles/legend/Balochistan_4.png" /> Balochistan'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_BISPBalOfficesandFocalPersonwithlatitudeandlogitudeMar122026_3.setVisible(true);lyr_Balochistan_4.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleTerrain_1,lyr_GoogleHybrid_2,lyr_BISPBalOfficesandFocalPersonwithlatitudeandlogitudeMar122026_3,lyr_Balochistan_4];
lyr_BISPBalOfficesandFocalPersonwithlatitudeandlogitudeMar122026_3.set('fieldAliases', {'SNo': 'SNo', 'Region': 'Region', 'Zone': 'Zone', 'District': 'District', 'Tehsil': 'Tehsil', 'Focal Person': 'Focal Person', 'Contac Number': 'Contac Number', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Office Address': 'Office Address', });
lyr_Balochistan_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINCE': 'PROVINCE', 'DISTRICT': 'DISTRICT', 'Shape_Leng': 'Shape_Leng', 'ADMIN_UNIT': 'ADMIN_UNIT', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_BISPBalOfficesandFocalPersonwithlatitudeandlogitudeMar122026_3.set('fieldImages', {'SNo': 'Range', 'Region': 'TextEdit', 'Zone': 'TextEdit', 'District': 'TextEdit', 'Tehsil': 'TextEdit', 'Focal Person': 'TextEdit', 'Contac Number': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Office Address': 'TextEdit', });
lyr_Balochistan_4.set('fieldImages', {'OBJECTID': 'Range', 'PROVINCE': 'TextEdit', 'DISTRICT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'ADMIN_UNIT': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BISPBalOfficesandFocalPersonwithlatitudeandlogitudeMar122026_3.set('fieldLabels', {'SNo': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Zone': 'inline label - visible with data', 'District': 'inline label - visible with data', 'Tehsil': 'inline label - visible with data', 'Focal Person': 'inline label - visible with data', 'Contac Number': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Office Address': 'inline label - visible with data', });
lyr_Balochistan_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'PROVINCE': 'hidden field', 'DISTRICT': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'ADMIN_UNIT': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Balochistan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});