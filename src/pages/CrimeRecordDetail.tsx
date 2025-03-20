import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, Calendar, Clock, Users, FileText, AlertTriangle, Edit } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Mock data for demonstration
const crimeRecord = {
  id: 1,
  title: 'Robbery at Main Street Bank',
  description: 'Armed robbery occurred at the main branch of City Bank. Two suspects were involved, wearing masks and dark clothing.',
  crimeType: 'theft',
  date: '2024-03-10',
  time: '14:30',
  location: '123 Main St, Downtown',
  latitude: 16.4971,
  longitude: 80.4992,
  victims: 0,
  suspects: 'Two masked individuals, approximately 6ft tall',
  witnesses: 'Three bank employees and two customers',
  evidenceDescription: 'Security camera footage, fingerprints on the counter',
  status: 'open',
  files: [
    { name: 'FIR_Report.pdf', type: 'application/pdf', size: '2.5MB' },
    { name: 'Security_Footage.mp4', type: 'video/mp4', size: '15.8MB' },
    { name: 'Evidence_Photo_1.jpg', type: 'image/jpeg', size: '3.2MB' },
  ],
};

function CrimeRecordDetail() {
  const { id } = useParams();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Information */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-bold text-gray-800">{crimeRecord.title}</h1>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                crimeRecord.status === 'closed'
                  ? 'bg-green-100 text-green-800'
                  : crimeRecord.status === 'in_progress'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {crimeRecord.status.replace('_', ' ')}
              </span>
              <Link
                to={`/crimes/edit/${id}`}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <Edit size={18} className="mr-1" />
                Edit
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Calendar size={20} className="mr-2" />
              <span>{crimeRecord.date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={20} className="mr-2" />
              <span>{crimeRecord.time}</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{crimeRecord.description}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Location Details</h3>
          <div className="mb-4 flex items-start text-gray-600">
            <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
            <span>{crimeRecord.location}</span>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <MapContainer
              center={[crimeRecord.latitude, crimeRecord.longitude]}
              zoom={15}
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[crimeRecord.latitude, crimeRecord.longitude]}>
                <Popup>
                  <div className="text-sm">
                    <strong>{crimeRecord.title}</strong>
                    <br />
                    {crimeRecord.location}
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      {/* Sidebar Information */}
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Case Details</h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium text-gray-500">Crime Type</div>
              <div className="mt-1 flex items-center">
                <AlertTriangle size={20} className="mr-2 text-blue-600" />
                <span className="text-gray-900">{crimeRecord.crimeType}</span>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Victims</div>
              <div className="mt-1 flex items-center">
                <Users size={20} className="mr-2 text-blue-600" />
                <span className="text-gray-900">{crimeRecord.victims}</span>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Suspects</div>
              <p className="mt-1 text-gray-900">{crimeRecord.suspects}</p>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Witnesses</div>
              <p className="mt-1 text-gray-900">{crimeRecord.witnesses}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Evidence & Files</h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium text-gray-500">Evidence Description</div>
              <p className="mt-1 text-gray-900">{crimeRecord.evidenceDescription}</p>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500 mb-2">Attached Files</div>
              <div className="space-y-2">
                {crimeRecord.files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center">
                      <FileText size={20} className="mr-2 text-blue-600" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{file.name}</div>
                        <div className="text-xs text-gray-500">{file.size}</div>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrimeRecordDetail;