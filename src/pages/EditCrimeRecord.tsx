import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import FormField from '../components/FormField';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface LocationMarker {
  lat: number;
  lng: number;
}

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters'),
  description: Yup.string()
    .required('Description is required')
    .min(10, 'Description must be at least 10 characters'),
  crimeType: Yup.string().required('Crime type is required'),
  date: Yup.date().required('Date is required').max(new Date(), 'Date cannot be in the future'),
  time: Yup.string().required('Time is required'),
  location: Yup.string().required('Location address is required'),
  latitude: Yup.number().required('Latitude is required'),
  longitude: Yup.number().required('Longitude is required'),
  victims: Yup.number().min(0, 'Number of victims cannot be negative').required('Number of victims is required'),
  suspects: Yup.string(),
  witnesses: Yup.string(),
  evidenceDescription: Yup.string(),
  status: Yup.string().required('Status is required'),
});

const MapPicker: React.FC<{ onLocationSelect: (location: LocationMarker) => void, initialPosition: LocationMarker }> = ({ onLocationSelect, initialPosition }) => {
  const [position, setPosition] = useState<LocationMarker>(initialPosition);

  const map = useMapEvents({
    click(e) {
      const newPos = { lat: e.latlng.lat, lng: e.latlng.lng };
      setPosition(newPos);
      onLocationSelect(newPos);
    },
  });

  return <Marker position={position} />;
};

// Mock data - replace with actual API call
const mockRecord = {
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
  files: [],
};

function EditCrimeRecord() {
  const { id } = useParams();

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    console.log('Updating record:', id, values);
    setSubmitting(false);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <Formik
          initialValues={mockRecord}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values, isSubmitting }) => (
            <Form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Basic Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
                  <FormField
                    label="Title"
                    name="title"
                    placeholder="Enter crime record title"
                  />

                  <FormField
                    label="Crime Type"
                    name="crimeType"
                    as="select"
                  >
                    <option value="">Select a type</option>
                    <option value="theft">Theft</option>
                    <option value="assault">Assault</option>
                    <option value="fraud">Fraud</option>
                    <option value="vandalism">Vandalism</option>
                    <option value="other">Other</option>
                  </FormField>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      label="Date"
                      name="date"
                      type="date"
                    />

                    <FormField
                      label="Time"
                      name="time"
                      type="time"
                    />
                  </div>

                  <FormField
                    label="Description"
                    name="description"
                    as="textarea"
                    rows={4}
                    placeholder="Detailed description of the incident"
                  />
                </div>

                {/* Location Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Location Details</h3>
                  <FormField
                    label="Location Address"
                    name="location"
                    placeholder="Enter full address"
                  />

                  <div className="h-[300px] relative rounded-lg overflow-hidden border border-gray-300">
                    <MapContainer
                      center={[values.latitude, values.longitude]}
                      zoom={13}
                      className="h-full w-full"
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      />
                      <MapPicker
                        initialPosition={{ lat: values.latitude, lng: values.longitude }}
                        onLocationSelect={(location) => {
                          setFieldValue('latitude', location.lat);
                          setFieldValue('longitude', location.lng);
                        }}
                      />
                    </MapContainer>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      label="Latitude"
                      name="latitude"
                      type="number"
                      step="any"
                    />

                    <FormField
                      label="Longitude"
                      name="longitude"
                      type="number"
                      step="any"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Additional Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    label="Number of Victims"
                    name="victims"
                    type="number"
                    min="0"
                  />

                  <FormField
                    label="Suspects"
                    name="suspects"
                    placeholder="Suspect descriptions"
                  />

                  <FormField
                    label="Witnesses"
                    name="witnesses"
                    placeholder="Witness information"
                  />
                </div>

                <FormField
                  label="Evidence Description"
                  name="evidenceDescription"
                  as="textarea"
                  rows={3}
                  placeholder="Description of available evidence"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Update Files
                    </label>
                    <input
                      type="file"
                      multiple
                      onChange={(event) => {
                        setFieldValue("files", event.currentTarget.files);
                      }}
                      className="w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100
                        cursor-pointer"
                    />
                  </div>

                  <FormField
                    label="Status"
                    name="status"
                    as="select"
                  >
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed</option>
                  </FormField>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-6 border-t">
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
                >
                  {isSubmitting ? 'Saving Changes...' : 'Save Changes'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default EditCrimeRecord;