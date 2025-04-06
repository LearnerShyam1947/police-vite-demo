import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Plus, Search, Phone, User, Calendar, FileText, Trash2, FolderX } from 'lucide-react';
import { deleteRecord, fetchData } from "./../services/CriminalRecordService";


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
      <h3 className="mt-4 text-lg font-medium text-gray-900">No Records Found</h3>
      <p className="mt-2 text-sm text-gray-500">
        We couldn't find any records matching your search criteria.
      </p>
    </div>
  );
}

function PaginationButton({ 
  page, 
  currentPage, 
  onClick 
}: { 
  page: number | string, 
  currentPage: number, 
  onClick: (page: number) => void 
}) {
  const isNumber = typeof page === 'number';
  return (
    <button
      onClick={() => isNumber && onClick(page as number)}
      className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
        currentPage === page
          ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
          : isNumber
          ? 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
          : 'bg-white border-gray-300 text-gray-700'
      }`}
      disabled={!isNumber}
    >
      {page}
    </button>
  );
}

function CrimeRecordsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [crimeRecords, setCrimeRecords] = useState<any[]>([]);
  const recordsPerPage = 5;

  const loadData = async () => {
    const data = await fetchData();
    if (data && data.records) {
      setCrimeRecords(data.records);
      setSearchTerm(" ");
    } else {
      console.error("No records found");
    }
    setIsLoading(false);
  };
  
  
  React.useEffect(() => {
    loadData();
  }, []);

  
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      console.log('Deleting record:', id);
      setCrimeRecords(prevRecords => prevRecords.filter(record => record.id !== id));
      deleteRecord(id);
      console.log(crimeRecords.length);
      
    }
  };

  
  const filteredRecords = useMemo(() => {
    return crimeRecords.filter(record => {
      const searchLower = searchTerm.toLowerCase();
      return (
        record.accusedName.toLowerCase().includes(searchLower) ||
        record.address.toLowerCase().includes(searchLower) ||
        record.mobileNumber.includes(searchTerm)
      );
    });
  }, [searchTerm]);

  
  const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);

  
  const getPaginationRange = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    range.push(1);

    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i > 1 && i < totalPages) {
        range.push(i);
      }
    }

    range.push(totalPages);

    let l;
    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Crime Records</h1>
        <Link
          to="/crimes/upload"
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} className="mr-2" />
          Add New Record
        </Link>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, address, or phone number..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); 
            }}
            className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Records List */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FIR Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accused Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoading ? (
                
                Array.from({ length: 5 }).map((_, index) => (
                  <ShimmerRow key={index} />
                ))
              ) : currentRecords.length > 0 ? (
                currentRecords.map((record) => (
                  <tr key={record._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-start space-x-2">
                        <FileText size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-900">FIR #{record.FirNo}</div>
                          <div className="text-sm text-gray-500">{record.policeStation}</div>
                          <div className="text-sm text-gray-500">{record.actsAndSections}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start space-x-2">
                        <User size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-900">{record.accusedName}</div>
                          <div className="text-sm text-gray-500">
                            {record.age} years, {record.gender}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Phone size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-600">{record.mobileNumber}</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <MapPin size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600 line-clamp-2">{record.address}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className="text-gray-400" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">FIR Date</div>
                            <div className="text-sm text-gray-500">{formatDate(record.firDate)}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className="text-gray-400" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">Arrest Date</div>
                            <div className="text-sm text-gray-500">{formatDate(record.arrestDate)}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDelete(record._id)}
                        className="text-red-600 hover:text-red-900 p-2 rounded-full hover:bg-red-50 transition-colors"
                        title="Delete Record"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5}>
                    <NoRecordsFound />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {!isLoading && totalPages > 1 && (
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(page => Math.min(page + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing{' '}
                  <span className="font-medium">{indexOfFirstRecord + 1}</span>
                  {' '}-{' '}
                  <span className="font-medium">
                    {Math.min(indexOfLastRecord, filteredRecords.length)}
                  </span>
                  {' '}of{' '}
                  <span className="font-medium">{filteredRecords.length}</span>
                  {' '}results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {getPaginationRange().map((pageNumber, index) => (
                    <PaginationButton
                      key={index}
                      page={pageNumber}
                      currentPage={currentPage}
                      onClick={setCurrentPage}
                    />
                  ))}
                  <button
                    onClick={() => setCurrentPage(page => Math.min(page + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CrimeRecordsList;
