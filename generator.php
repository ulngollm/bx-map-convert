<?php
$old_map_params = stripslashes($_POST['params']);
$new_geo_data = $_POST['points'];
$cities = json_decode($new_geo_data, true);
$map_data = unserialize($old_map_params);
array_push($map_data['PLACEMARKS'], ...$cities);
echo addslashes(serialize($map_data));
