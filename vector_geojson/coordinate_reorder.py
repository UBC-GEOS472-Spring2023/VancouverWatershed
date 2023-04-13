import json
from functools import cmp_to_key

# Define a custom comparison function for sorting coordinates
def compare_coordinates(coord1, coord2):
    if coord1[0] < coord2[0]:
        return -1
    elif coord1[0] > coord2[0]:
        return 1
    else:
        return 0

# Load the GeoJSON file
with open('C:/Users/Jeremy/OneDrive/Documents/GitHub/ioromieh.github.io/projects/VancouverWatershed/vector_geojson/vancouver_mains3_testfeature.geojson', 'r') as f:
    geojson_data = json.load(f)

# Extract the features from the GeoJSON
features = geojson_data['features']

# Loop through each feature
for feature in features:
    # Extract the coordinates from the feature
    coordinates = feature['geometry']['coordinates']

    # Sort the coordinates based on the longitude (X) value, using the custom comparison function
    coordinates.sort(key=cmp_to_key(compare_coordinates))

    # Update the feature with the sorted coordinates
    feature['geometry']['coordinates'] = coordinates

# Save the updated GeoJSON to a new file
with open('output.geojson', 'w') as f:
    json.dump(geojson_data, f)
