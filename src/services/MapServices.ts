import * as turf from '@turf/turf';

export const checkPointsInRegions = (psRegions: any, queries: any) => {

    const result: any = {
        default: []
    };


    psRegions.features.forEach((feature: any) => {
        result[`region${feature.properties.regionId}`] = [];
    });


    queries.forEach((query: any) => {
        const point = turf.point([query.longitude, query.latitude]);
        let foundRegion = false;


        psRegions.features.forEach((feature: any) => {
            const polygon = turf.polygon(feature.geometry.coordinates);


            if (turf.booleanPointInPolygon(point, polygon)) {
                result[`region${feature.properties.regionId}`].push(query);
                foundRegion = true;
            }
        });


        if (!foundRegion) {
            result.default.push(query);
        }
    });

    return result;
};
