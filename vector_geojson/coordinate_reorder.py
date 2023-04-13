import json

# Load the GeoJSON file
with open('C:/Users/Jeremy/OneDrive/Documents/GitHub/ioromieh.github.io/projects/VancouverWatershed/vector_geojson/vancouver_mains3_testfeature.geojson', 'r') as f:
    geojson_data = json.load(f)

# Extract the features from the GeoJSON
features = geojson_data['features']

# Loop through each feature
for feature in features:
    # Extract the coordinates from the feature
    coordinates = feature['geometry']['coordinates']

    # Sort the coordinates based on the longitude (X) value
    coordinates.sort(key=lambda coord: coord[0])

    # Update the feature with the sorted coordinates
    feature['geometry']['coordinates'] = coordinates

# Save the updated GeoJSON to a new file
with open('output.geojson', 'w') as f:
    json.dump(geojson_data, f)
