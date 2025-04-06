import { FolderX, MapPin } from 'lucide-react';
import { fetchData } from '../services/BeatsService';
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
// import { sampleData } from "./../data/beats-sample";

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
        We couldn't find any records, May be today's records were not uploaded still.
      </p>
    </div>
  );
}


function BeatsList() {

  const { user } = useAuth();
  const [sampleData, setSampleData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
        const data = await fetchData(user && user.ps);
        if (data && data.data) {
          setSampleData(data.data);
          setIsLoading(false);
        } else {
          console.error("No records found");
        }
      };
      
      
      React.useEffect(() => {
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lat & Long</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Police Station</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <ShimmerRow key={index} />
                ))
              ) : sampleData.length > 0 ? sampleData.map((record, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{record.accusedName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{record.mobileNumber}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      <a target='_blank' href={record.mapUrl}>{record.latitude}, {record.longitude}</a>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-normal break-words">
                    <div className="flex items-center text-sm text-gray-900">
                      <MapPin size={16} className="mr-1 text-gray-400" />
                      {record.address}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{record.currentPoliceStation}</div>
                  </td>
                </tr> 
              )) : <tr>
              <td colSpan={6}>
                <NoRecordsFound />
              </td>
            </tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BeatsList;
