import argparse
import json


def main():
    parser = argparse.ArgumentParser(description="Swap the winding order of "
                                     "polygons in a GeoJSON file.")
    parser.add_argument('input', type=str, help='The name of the input file to convert')
    parser.add_argument('output', type=str, help='The name of the output file')

    args = parser.parse_args()
    input_file = args.input
    output_file = args.output

    print(f"Converting {input_file}, saving to {output_file}")

    input_data = None
    with open(input_file, 'r') as file:
       input_data = json.load(file) 

    if not input_data:
        raise ValueError("Could not read input data")

    if 'type' not in input_data or \
            input_data['type'] != 'FeatureCollection' or \
            'features' not in input_data:
        raise ValueError("Found no feature collection in input data")

    for feature in input_data['features']:
        geometry = feature['geometry']
        geom_type = geometry['type']
        if geom_type == 'Polygon':
            coords = geometry['coordinates'][0]
            geometry['coordinates'] = [coords[::-1]]
        elif geom_type == 'MultiPolygon':
            coords = geometry['coordinates'][0][0]
            geometry['coordinates'] = [[coords[::-1]]]
        else:
            raise ValueError(f'Unknown geometry type: {geom_type}')

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(input_data, f, ensure_ascii=False, indent=4)


if __name__ == "__main__":
    main()
