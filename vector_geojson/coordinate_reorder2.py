import json
from math import radians, sin, cos, sqrt, atan2

# Haversine distance formula implementation goes here
def haversine_distance(lat1, lon1, lat2, lon2):
    R = 6371  # radius of the earth in km
    dLat = radians(lat2 - lat1)
    dLon = radians(lon2 - lon1)
    a = sin(dLat / 2) * sin(dLat / 2) + cos(radians(lat1)) * cos(radians(lat2)) * sin(dLon / 2) * sin(dLon / 2)
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    distance = R * c
    return distance


# Load the GeoJSON file
with open('C:/Users/Jeremy/OneDrive/Documents/GitHub/ioromieh.github.io/projects/VancouverWatershed/vector_geojson/vancouver_mains_single.json', 'r') as f:
    geojson_data = json.load(f)

# Extract the features from the GeoJSON
features = geojson_data['features']

# Loop through each feature
for feature in features:
    # Extract the coordinates from the feature
    coordinates = feature['geometry']['coordinates']

    # Add a new property to each coordinate called 'cumulative_distance'
    cumulative_distance = 0
    for i, coord in enumerate(coordinates):
        if i > 0:
            prev_coord = coordinates[i-1]
            distance = haversine_distance(prev_coord[1], prev_coord[0], coord[1], coord[0])
            cumulative_distance += distance
        coord.append(cumulative_distance)

    # Update the feature with the new coordinate properties
    feature['geometry']['coordinates'] = coordinates

# Save the updated GeoJSON to a new file
with open('output2.geojson', 'w') as f:
    json.dump(geojson_data, f)
