import * as turf from '@turf/turf';

// // Your GeoJSON data (assuming you have the psRegions data already)
// const psRegions =  {
//   "type": "FeatureCollection",
//   "features": [
//       {
//           "type": "Feature",
//           "geometry": {
//               "type": "Polygon",
//               "coordinates": [
//                   [
//                       [
//                           77.60124841792879,
//                           14.687486793439689
//                       ],
//                       [
//                           77.60752999494781,
//                           14.687318855024003
//                       ],
//                       [
//                           77.61467962909308,
//                           14.686830306174173
//                       ],
//                       [
//                           77.61543720622177,
//                           14.686402825034548
//                       ],
//                       [
//                           77.61586334335664,
//                           14.685975343059042
//                       ],
//                       [
//                           77.61635261191844,
//                           14.684677624797885
//                       ],
//                       [
//                           77.61660513762763,
//                           14.683364631424354
//                       ],
//                       [
//                           77.61409566339017,
//                           14.682769201599257
//                       ],
//                       [
//                           77.61226485199808,
//                           14.682158502657572
//                       ],
//                       [
//                           77.61123896630386,
//                           14.68092183207753
//                       ],
//                       [
//                           77.61077254923237,
//                           14.679894768922935
//                       ],
//                       [
//                           77.61034452061563,
//                           14.67865259629778
//                       ],
//                       [
//                           77.61026898615376,
//                           14.67753219925045
//                       ],
//                       [
//                           77.6116034283117,
//                           14.673562050479347
//                       ],
//                       [
//                           77.61218252585206,
//                           14.670639195528281
//                       ],
//                       [
//                           77.61109986523303,
//                           14.66968925926433
//                       ],
//                       [
//                           77.60958917599822,
//                           14.67141862733257
//                       ],
//                       [
//                           77.60863240614856,
//                           14.672977482611913
//                       ],
//                       [
//                           77.6068951135282,
//                           14.673440265636074
//                       ],
//                       [
//                           77.60627206337517,
//                           14.674620278469988
//                       ],
//                       [
//                           77.60526778427248,
//                           14.675947991345154
//                       ],
//                       [
//                           77.60350536645575,
//                           14.681135578109178
//                       ],
//                       [
//                           77.6017376864906,
//                           14.682509654756828
//                       ],
//                       [
//                           77.60121685221463,
//                           14.685517325728625
//                       ],
//                       [
//                           77.60124841792879,
//                           14.687486793439689
//                       ]
//                   ]
//               ]
//           },
//           "id": "88ca05dd-c63e-4d4d-bbd0-466bf90c3bc6",
//           "properties": {
//               "regionId" : 1
//           }
//       },
//       {
//           "type": "Feature",
//           "geometry": {
//               "type": "Polygon",
//               "coordinates": [
//                   [
//                       [
//                           77.59293131837603,
//                           14.681989528811982
//                       ],
//                       [
//                           77.5911702926303,
//                           14.67839661273446
//                       ],
//                       [
//                           77.59080207815691,
//                           14.677328018547925
//                       ],
//                       [
//                           77.59054592895785,
//                           14.675794809075853
//                       ],
//                       [
//                           77.59129836723054,
//                           14.670807932247001
//                       ],
//                       [
//                           77.59227060113733,
//                           14.666306365096617
//                       ],
//                       [
//                           77.59572000822482,
//                           14.666598658133452
//                       ],
//                       [
//                           77.60186786969876,
//                           14.665693171208488
//                       ],
//                       [
//                           77.60800694734087,
//                           14.664552598675357
//                       ],
//                       [
//                           77.61188438304515,
//                           14.664211586906731
//                       ],
//                       [
//                           77.61125932111486,
//                           14.668396874479996
//                       ],
//                       [
//                           77.60863240614856,
//                           14.672977482611913
//                       ],
//                       [
//                           77.6068951135282,
//                           14.673440265636074
//                       ],
//                       [
//                           77.60405836909018,
//                           14.677019272648664
//                       ],
//                       [
//                           77.60219518569943,
//                           14.677433334066379
//                       ],
//                       [
//                           77.59621322999163,
//                           14.681106791969086
//                       ],
//                       [
//                           77.59293131837603,
//                           14.681989528811982
//                       ]
//                   ]
//               ]
//           },
//           "id": "52d70296-e220-4cfc-b942-beaa4e591558",
//           "properties": {
//               "regionId" : 2
//           }
//       },
//       {
//           "type": "Feature",
//           "geometry": {
//               "type": "Polygon",
//               "coordinates": [
//                   [
//                       [
//                           77.59127640742912,
//                           14.699791327375394
//                       ],
//                       [
//                           77.59351083231593,
//                           14.700638609844447
//                       ],
//                       [
//                           77.5972876040745,
//                           14.702020044536155
//                       ],
//                       [
//                           77.5981465498607,
//                           14.70111106148724
//                       ],
//                       [
//                           77.59919388992807,
//                           14.700957568536666
//                       ],
//                       [
//                           77.6081286302155,
//                           14.702026565558185
//                       ],
//                       [
//                           77.60791969264301,
//                           14.694007601699212
//                       ],
//                       [
//                           77.60747536655208,
//                           14.688021102044658
//                       ],
//                       [
//                           77.59620852643013,
//                           14.68851230819132
//                       ],
//                       [
//                           77.59452585864693,
//                           14.691717520609103
//                       ],
//                       [
//                           77.5927626192539,
//                           14.692545948110876
//                       ],
//                       [
//                           77.59135202773916,
//                           14.693218434008756
//                       ],
//                       [
//                           77.58932682135276,
//                           14.693647264515889
//                       ],
//                       [
//                           77.58944772919523,
//                           14.694076094180588
//                       ],
//                       [
//                           77.58926636743064,
//                           14.69525537141898
//                       ],
//                       [
//                           77.5890044004338,
//                           14.69577191233681
//                       ],
//                       [
//                           77.5890144760881,
//                           14.696356674165855
//                       ],
//                       [
//                           77.58930667004421,
//                           14.696697784510732
//                       ],
//                       [
//                           77.58948803181045,
//                           14.696785498512426
//                       ],
//                       [
//                           77.58965931792255,
//                           14.697224067996657
//                       ],
//                       [
//                           77.59010264668387,
//                           14.69765289064047
//                       ],
//                       [
//                           77.59017317626018,
//                           14.697867301646667
//                       ],
//                       [
//                           77.58987090664976,
//                           14.698081712442402
//                       ],
//                       [
//                           77.58964924226996,
//                           14.698773673120627
//                       ],
//                       [
//                           77.59060591784112,
//                           14.699626187775564
//                       ],
//                       [
//                           77.59127640742912,
//                           14.699791327375394
//                       ]
//                   ]
//               ]
//           },
//           "id": "388b5478-1f46-4b95-81a8-ab9697368e0c",
//           "properties": {
//               "regionId" : 3
//           }
//       },
//       {
//           "type": "Feature",
//           "geometry": {
//               "type": "Polygon",
//               "coordinates": [
//                   [
//                       [
//                           77.57731477768596,
//                           14.68357534216571
//                       ],
//                       [
//                           77.57568144015158,
//                           14.673875407984667
//                       ],
//                       [
//                           77.57534789573373,
//                           14.671231618107925
//                       ],
//                       [
//                           77.57573523763978,
//                           14.66984725869932
//                       ],
//                       [
//                           77.57516498427867,
//                           14.66698483365738
//                       ],
//                       [
//                           77.5754879448346,
//                           14.665711466967892
//                       ],
//                       [
//                           77.57484785098342,
//                           14.66489871396233
//                       ],
//                       [
//                           77.57476783925244,
//                           14.661996000028182
//                       ],
//                       [
//                           77.58095766708772,
//                           14.66024363257901
//                       ],
//                       [
//                           77.5926793857476,
//                           14.66233360721381
//                       ],
//                       [
//                           77.59129836723054,
//                           14.670807932247001
//                       ],
//                       [
//                           77.59013045803391,
//                           14.676828668504143
//                       ],
//                       [
//                           77.59293131837603,
//                           14.681989528811982
//                       ],
//                       [
//                           77.58731050479446,
//                           14.683916323756549
//                       ],
//                       [
//                           77.57731477768596,
//                           14.68357534216571
//                       ]
//                   ]
//               ]
//           },
//           "id": "46e137e0-235a-4d65-a107-b835ee3d240c",
//           "properties": {
//               "regionId" : 4
//           }
//       },
//       {
//           "type": "Feature",
//           "geometry": {
//               "type": "Polygon",
//               "coordinates": [
//                   [
//                       [
//                           77.60455123463379,
//                           14.677460446283789
//                       ],
//                       [
//                           77.60274363907388,
//                           14.677658205568605
//                       ],
//                       [
//                           77.60209806923035,
//                           14.678095357038131
//                       ],
//                       [
//                           77.59647236242711,
//                           14.681281271058253
//                       ],
//                       [
//                           77.58346024450799,
//                           14.686507263927197
//                       ],
//                       [
//                           77.58545971190932,
//                           14.69436648423671
//                       ],
//                       [
//                           77.5927626192539,
//                           14.692545948110876
//                       ],
//                       [
//                           77.59620852643013,
//                           14.68851230819132
//                       ],
//                       [
//                           77.59891855103409,
//                           14.688394157873338
//                       ],
//                       [
//                           77.60124841792879,
//                           14.687486793439689
//                       ],
//                       [
//                           77.6017376864906,
//                           14.682509654756828
//                       ],
//                       [
//                           77.60350536645575,
//                           14.681135578109178
//                       ],
//                       [
//                           77.60348148985054,
//                           14.680505785760914
//                       ],
//                       [
//                           77.60376073287887,
//                           14.679705051074649
//                       ],
//                       [
//                           77.60455123463379,
//                           14.677460446283789
//                       ]
//                   ]
//               ]
//           },
//           "id": "8c80e960-0ee8-4d6e-a58f-5d145aa16a11",
//           "properties": {
//               "regionId" : 5
//           }
//       }
//   ]
// }

// // Function to find which region the point belongs to
// const findRegion = (latitude, longitude) => {
//   // Create a point feature from the latitude and longitude
//   const point = turf.point([longitude, latitude]);

//   // Iterate over each region and check if the point is inside
//   for (const feature of psRegions.features) {
//     const polygon = turf.polygon(feature.geometry.coordinates);
//     if (turf.booleanPointInPolygon(point, polygon)) {
//       return feature.properties.regionId; // Return the regionId if the point is inside the polygon
//     }
//   }

//   return null; // Return null if the point is not inside any region
// };

// // Example usage
// const latitude = 14.6703;
// const longitude = 77.6012;
// const regionId = findRegion(latitude, longitude);
// console.log(`The point is in region: ${regionId}`);

// ===========================
// const turf = require('@turf/turf');

// Define the psRegions data
const psRegions = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            77.60124841792879,
                            14.687486793439689
                        ],
                        [
                            77.60752999494781,
                            14.687318855024003
                        ],
                        [
                            77.61467962909308,
                            14.686830306174173
                        ],
                        [
                            77.61543720622177,
                            14.686402825034548
                        ],
                        [
                            77.61586334335664,
                            14.685975343059042
                        ],
                        [
                            77.61635261191844,
                            14.684677624797885
                        ],
                        [
                            77.61660513762763,
                            14.683364631424354
                        ],
                        [
                            77.61409566339017,
                            14.682769201599257
                        ],
                        [
                            77.61226485199808,
                            14.682158502657572
                        ],
                        [
                            77.61123896630386,
                            14.68092183207753
                        ],
                        [
                            77.61077254923237,
                            14.679894768922935
                        ],
                        [
                            77.61034452061563,
                            14.67865259629778
                        ],
                        [
                            77.61026898615376,
                            14.67753219925045
                        ],
                        [
                            77.6116034283117,
                            14.673562050479347
                        ],
                        [
                            77.61218252585206,
                            14.670639195528281
                        ],
                        [
                            77.61109986523303,
                            14.66968925926433
                        ],
                        [
                            77.60958917599822,
                            14.67141862733257
                        ],
                        [
                            77.60863240614856,
                            14.672977482611913
                        ],
                        [
                            77.6068951135282,
                            14.673440265636074
                        ],
                        [
                            77.60627206337517,
                            14.674620278469988
                        ],
                        [
                            77.60526778427248,
                            14.675947991345154
                        ],
                        [
                            77.60350536645575,
                            14.681135578109178
                        ],
                        [
                            77.6017376864906,
                            14.682509654756828
                        ],
                        [
                            77.60121685221463,
                            14.685517325728625
                        ],
                        [
                            77.60124841792879,
                            14.687486793439689
                        ]
                    ]
                ]
            },
            "id": "88ca05dd-c63e-4d4d-bbd0-466bf90c3bc6",
            "properties": {
                "regionId" : 1
            }
        },
       
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            77.59293131837603,
                            14.681989528811982
                        ],
                        [
                            77.5911702926303,
                            14.67839661273446
                        ],
                        [
                            77.59080207815691,
                            14.677328018547925
                        ],
                        [
                            77.59054592895785,
                            14.675794809075853
                        ],
                        [
                            77.59129836723054,
                            14.670807932247001
                        ],
                        [
                            77.59227060113733,
                            14.666306365096617
                        ],
                        [
                            77.59572000822482,
                            14.666598658133452
                        ],
                        [
                            77.60186786969876,
                            14.665693171208488
                        ],
                        [
                            77.60800694734087,
                            14.664552598675357
                        ],
                        [
                            77.61188438304515,
                            14.664211586906731
                        ],
                        [
                            77.61125932111486,
                            14.668396874479996
                        ],
                        [
                            77.60863240614856,
                            14.672977482611913
                        ],
                        [
                            77.6068951135282,
                            14.673440265636074
                        ],
                        [
                            77.60405836909018,
                            14.677019272648664
                        ],
                        [
                            77.60219518569943,
                            14.677433334066379
                        ],
                        [
                            77.59621322999163,
                            14.681106791969086
                        ],
                        [
                            77.59293131837603,
                            14.681989528811982
                        ]
                    ]
                ]
            },
            "id": "52d70296-e220-4cfc-b942-beaa4e591558",
            "properties": {
                "regionId" : 2
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            77.59127640742912,
                            14.699791327375394
                        ],
                        [
                            77.59351083231593,
                            14.700638609844447
                        ],
                        [
                            77.5972876040745,
                            14.702020044536155
                        ],
                        [
                            77.5981465498607,
                            14.70111106148724
                        ],
                        [
                            77.59919388992807,
                            14.700957568536666
                        ],
                        [
                            77.6081286302155,
                            14.702026565558185
                        ],
                        [
                            77.60791969264301,
                            14.694007601699212
                        ],
                        [
                            77.60747536655208,
                            14.688021102044658
                        ],
                        [
                            77.59620852643013,
                            14.68851230819132
                        ],
                        [
                            77.59452585864693,
                            14.691717520609103
                        ],
                        [
                            77.5927626192539,
                            14.692545948110876
                        ],
                        [
                            77.59135202773916,
                            14.693218434008756
                        ],
                        [
                            77.58932682135276,
                            14.693647264515889
                        ],
                        [
                            77.58944772919523,
                            14.694076094180588
                        ],
                        [
                            77.58926636743064,
                            14.69525537141898
                        ],
                        [
                            77.5890044004338,
                            14.69577191233681
                        ],
                        [
                            77.5890144760881,
                            14.696356674165855
                        ],
                        [
                            77.58930667004421,
                            14.696697784510732
                        ],
                        [
                            77.58948803181045,
                            14.696785498512426
                        ],
                        [
                            77.58965931792255,
                            14.697224067996657
                        ],
                        [
                            77.59010264668387,
                            14.69765289064047
                        ],
                        [
                            77.59017317626018,
                            14.697867301646667
                        ],
                        [
                            77.58987090664976,
                            14.698081712442402
                        ],
                        [
                            77.58964924226996,
                            14.698773673120627
                        ],
                        [
                            77.59060591784112,
                            14.699626187775564
                        ],
                        [
                            77.59127640742912,
                            14.699791327375394
                        ]
                    ]
                ]
            },
            "id": "388b5478-1f46-4b95-81a8-ab9697368e0c",
            "properties": {
                "regionId" : 3
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            77.57731477768596,
                            14.68357534216571
                        ],
                        [
                            77.57568144015158,
                            14.673875407984667
                        ],
                        [
                            77.57534789573373,
                            14.671231618107925
                        ],
                        [
                            77.57573523763978,
                            14.66984725869932
                        ],
                        [
                            77.57516498427867,
                            14.66698483365738
                        ],
                        [
                            77.5754879448346,
                            14.665711466967892
                        ],
                        [
                            77.57484785098342,
                            14.66489871396233
                        ],
                        [
                            77.57476783925244,
                            14.661996000028182
                        ],
                        [
                            77.58095766708772,
                            14.66024363257901
                        ],
                        [
                            77.5926793857476,
                            14.66233360721381
                        ],
                        [
                            77.59129836723054,
                            14.670807932247001
                        ],
                        [
                            77.59013045803391,
                            14.676828668504143
                        ],
                        [
                            77.59293131837603,
                            14.681989528811982
                        ],
                        [
                            77.58731050479446,
                            14.683916323756549
                        ],
                        [
                            77.57731477768596,
                            14.68357534216571
                        ]
                    ]
                ]
            },
            "id": "46e137e0-235a-4d65-a107-b835ee3d240c",
            "properties": {
                "regionId" : 4
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            77.60455123463379,
                            14.677460446283789
                        ],
                        [
                            77.60274363907388,
                            14.677658205568605
                        ],
                        [
                            77.60209806923035,
                            14.678095357038131
                        ],
                        [
                            77.59647236242711,
                            14.681281271058253
                        ],
                        [
                            77.58346024450799,
                            14.686507263927197
                        ],
                        [
                            77.58545971190932,
                            14.69436648423671
                        ],
                        [
                            77.5927626192539,
                            14.692545948110876
                        ],
                        [
                            77.59620852643013,
                            14.68851230819132
                        ],
                        [
                            77.59891855103409,
                            14.688394157873338
                        ],
                        [
                            77.60124841792879,
                            14.687486793439689
                        ],
                        [
                            77.6017376864906,
                            14.682509654756828
                        ],
                        [
                            77.60350536645575,
                            14.681135578109178
                        ],
                        [
                            77.60348148985054,
                            14.680505785760914
                        ],
                        [
                            77.60376073287887,
                            14.679705051074649
                        ],
                        [
                            77.60455123463379,
                            14.677460446283789
                        ]
                    ]
                ]
            },
            "id": "8c80e960-0ee8-4d6e-a58f-5d145aa16a11",
            "properties": {
                "regionId" : 5
            }
        }
    ]
}

// Function to check which region each query point belongs to
const checkPointsInRegions = (psRegions, queries) => {
    const result = { default: [] };

    // Initialize empty arrays for each region
    psRegions.features.forEach((feature) => {
        result[`region${feature.properties.regionId}`] = [];
    });

    // Iterate over each query point and check its region
    queries.forEach((query) => {
        const point = turf.point([query.long, query.lat]);
        let foundRegion = false;

        psRegions.features.forEach((feature) => {
            const polygon = turf.polygon(feature.geometry.coordinates);

            // If the point is inside this region, add it to the corresponding region array
            if (turf.booleanPointInPolygon(point, polygon)) {
                result[`region${feature.properties.regionId}`].push(query);
                foundRegion = true;
            }
        });

        // If the point does not match any region, add it to the default array
        if (!foundRegion) {
            result.default.push(query);
        }
    });

    return result;
};

// Example queries
const queries = [
    {
        "name": "John Doe",
        "lat": 14.679235317132302,
        "long": 77.60762669834641,
        "noOfCrimes": 5,
        "address": "123 Old Town, Ananthapuramu",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s",
        "phoneNumber": "9440796801",
        "aadharNumber": "1234 5678 9876"
    },
    {
        "name": "Jane Smith",
        "lat": 14.678523281014642,
        "long": 77.59379242533158,
        "noOfCrimes": 3,
        "address": "456 District Court, Ananthapuramu",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s",
        "phoneNumber": "9440796802",
        "aadharNumber": "2345 6789 8765"
    },
    {
        "name": "Michael Johnson",
        "lat": 14.693443045725029,
        "long": 77.59994064622662,
        "noOfCrimes": 7,
        "address": "789 HLC Colony, Ananthapuramu",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s",
        "phoneNumber": "9490618680",
        "aadharNumber": "3456 7890 7654"
    },
    {
        "name": "Sarah Connor",
        "lat": 14.665926021322963,
        "long": 77.58023110416724,
        "noOfCrimes": 2,
        "address": "101 Gandhi Bazar, Ananthapuramu",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s",
        "phoneNumber": "9490188430",
        "aadharNumber": "4567 8901 6543"
    },
    {
        "name": "David Brown",
        "lat": 14.68544205167674,
        "long": 77.59555364411882,
        "noOfCrimes": 4,
        "address": "202 Clock Tower, Ananthapuramu",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s",
        "phoneNumber": "9440796810",
        "aadharNumber": "5678 9012 5432"
    },
    {
        "name": "Chris Evans",
        "lat": 14.677235317132302,
        "long": 77.60962669834641,
        "noOfCrimes": 6,
        "address": "303 Old Town, Ananthapuramu",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s",
        "phoneNumber": "9440796805",
        "aadharNumber": "6789 0123 4321"
    },
    {
        "name": "Olivia Taylor",
        "lat": 14.679823281014642,
        "long": 77.59079242533158,
        "noOfCrimes": 8,
        "address": "404 District Court, Ananthapuramu",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s",
        "phoneNumber": "9440796803",
        "aadharNumber": "7890 1234 3210"
    },
    {
        "name": "Emma Williams",
        "lat": 14.690443045725029,
        "long": 77.59844064622662,
        "noOfCrimes": 1,
        "address": "505 HLC Colony, Ananthapuramu",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s",
        "phoneNumber": "9490618690",
        "aadharNumber": "8901 2345 2109"
    },
    {
        "name": "Liam Wilson",
        "lat": 14.663026021322963,
        "long": 77.58523110416724,
        "noOfCrimes": 9,
        "address": "606 Gandhi Bazar, Ananthapuramu",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s",
        "phoneNumber": "9490188440",
        "aadharNumber": "9012 3456 1098"
    },
    {
        "name": "Lucas Martinez",
        "lat": 14.68144205167674,
        "long": 77.59935364411882,
        "noOfCrimes": 10,
        "address": "707 Clock Tower, Ananthapuramu",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s",
        "phoneNumber": "9440796812",
        "aadharNumber": "0123 4567 9870"
    }
];

// Running the function and displaying the result
const result = checkPointsInRegions(psRegions, queries);
console.log(result);
