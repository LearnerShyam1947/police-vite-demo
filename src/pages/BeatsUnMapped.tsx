import { FolderX, MapPin } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { fetchUpMapData, updatePS } from '../services/BeatsService';

function ShimmerRow() {
  return (
    <tr>
      <td className="px-6 py-4">
        <div className="flex items-start space-x-2">
          <div className="h-4 w-4 bg-gray-200 rounded animate-pulse mt-1"></div>
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-3 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-3 w-40 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-start space-x-2">
          <div className="h-4 w-4 bg-gray-200 rounded animate-pulse mt-1"></div>
          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-3 w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse mt-1"></div>
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
            <div>
              <div className="h-3 w-16 bg-gray-200 rounded animate-pulse mb-1"></div>
              <div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
            <div>
              <div className="h-3 w-16 bg-gray-200 rounded animate-pulse mb-1"></div>
              <div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
      </td>
    </tr>
  );
}

function NoRecordsFound() {
  return (
    <div className="text-center py-16">
      <FolderX className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-4 text-lg font-medium text-gray-900">No Betas Found</h3>
      <p className="mt-2 text-sm text-gray-500">
        We couldn't find any records, Maybe today's records were not uploaded yet.
      </p>
    </div>
  );
}

function BeatsUnMapped() {
  const [sampleData, setSampleData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeUpdateRowId, setActiveUpdateRowId] = useState<string | null>(null);

  const loadData = async () => {
    const data: any = await fetchUpMapData();
    if (data && data.data) {
      setSampleData(data.data);
      setIsLoading(false);
    } else {
      console.error("No records found");
    }
  };

  const handleSelectChange = async (recordId: string, newPS: string) => {
    try {
      await updatePS(recordId, newPS);
      alert("Police Station updated successfully.");
      setActiveUpdateRowId(null);
      loadData();
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update. Please try again.");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Beats Records</h1>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full max-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lat & Long</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current Police Station</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoading ? (
                Array.from({ length: 5 }).map((_, index) => <ShimmerRow key={index} />)
              ) : sampleData.length > 0 ? (
                sampleData.map((record) => (
                  <tr key={record._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {record.accusedName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{record.mobileNumber}</td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        <a target='_blank' href={record.mapUrl}>{record.latitude}, {record.longitude}</a>
                      </span>
                    </td>

                    <td className="px-6 py-4 break-words text-sm text-gray-900 flex items-center">
                      <MapPin size={16} className="mr-1 text-gray-400" />
                      {record.address}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                        {record.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{record.currentPoliceStation}</td>
                    <td className="px-6 py-4">
                      {activeUpdateRowId === record._id ? (
                        <select
                          onChange={(e) => handleSelectChange(record._id, e.target.value)}
                          className="border rounded px-2 py-1"
                          defaultValue=""
                        >
                          <option value="" disabled>Select Station</option>
                          <option value="1 Town PS">1 Town PS</option>
                          <option value="2 Town PS">2 Town PS</option>
                          <option value="3 Town PS">3 Town PS</option>
                          <option value="4 Town PS">4 Town PS</option>
                          <option value="Rural PS">Rural PS</option>
                        </select>
                      ) : (
                        <button
                          onClick={() => setActiveUpdateRowId(record._id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded"
                        >
                          Update
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7}>
                    <NoRecordsFound />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BeatsUnMapped;
