'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AdminLayout from '../../../components/admin/AdminLayout';

interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
    features: string[];
    status: 'active' | 'draft';
    createdAt: string;
}

const ServicesAdmin: React.FC = () => {
    const [services, setServices] = useState<Service[]>([
        {
            id: 1,
            title: 'Facial Balancing',
            description: 'Advanced techniques to harmonize and enhance your natural facial features with precision and artistry.',
            image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/o4lgbuq7_548618488_18075513953481582_4540073863437101175_n.jpg',
            features: ['Dermal Fillers', 'Cheek Enhancement', 'Jawline Contouring', 'Lip Enhancement'],
            status: 'active',
            createdAt: '2024-01-15'
        },
        {
            id: 2,
            title: 'Non-Surgical Enhancements',
            description: 'Revolutionary treatments that deliver exceptional results without invasive procedures or lengthy recovery times.',
            image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/tttuu4a0_548698576_17881107792389543_84542946011862593_n.jpg',
            features: ['Thread Lifts', 'Skin Boosters', 'Anti-Wrinkle Injections', 'Profile Enhancement'],
            status: 'active',
            createdAt: '2024-01-10'
        },
        {
            id: 3,
            title: 'Toxin Treatments',
            description: 'Expertly administered neurotoxin treatments for facial rejuvenation and natural-looking results.',
            image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/j2anapdm_546613438_17880927918389543_2874396220693872092_n.jpg',
            features: ['Forehead Lines', 'Crow\'s Feet', 'Frown Lines', 'Facial Slimming'],
            status: 'active',
            createdAt: '2024-01-08'
        },
        {
            id: 4,
            title: 'Skin Rejuvenation',
            description: 'Restore your skin\'s natural radiance with advanced treatments and cutting-edge technology.',
            image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/k08h122u_SnapInsta.to_551660069_17881765080389543_3685001505789523181_n.jpg',
            features: ['Chemical Peels', 'Microneedling', 'PRP Therapy', 'Laser Treatments'],
            status: 'active',
            createdAt: '2024-01-05'
        }
    ]);

    const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null);

    const handleDelete = (id: number) => {
        setServices(services.filter(service => service.id !== id));
        setShowDeleteModal(null);
    };

    const toggleStatus = (id: number) => {
        setServices(services.map(service => 
            service.id === id 
                ? { ...service, status: service.status === 'active' ? 'draft' : 'active' }
                : service
        ));
    };

    return (
        <AdminLayout>
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-light text-gray-900 mb-2">Services Management</h1>
                        <p className="text-gray-600">Manage your aesthetic services and treatments</p>
                    </div>
                    <Link 
                        href="/admin/services/new"
                        className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add New Service
                    </Link>
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div key={service.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        {/* Service Image */}
                        <div className="aspect-square relative overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 right-2">
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                    service.status === 'active' 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {service.status}
                                </span>
                            </div>
                        </div>

                        {/* Service Content */}
                        <div className="p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                            
                            {/* Features */}
                            <div className="mb-4">
                                <p className="text-xs font-medium text-gray-700 mb-2">Features ({service.features.length})</p>
                                <div className="flex flex-wrap gap-1">
                                    {service.features.slice(0, 3).map((feature, index) => (
                                        <span key={index} className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                                            {feature}
                                        </span>
                                    ))}
                                    {service.features.length > 3 && (
                                        <span className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                                            +{service.features.length - 3} more
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="text-xs text-gray-500 mb-4">
                                Created: {new Date(service.createdAt).toLocaleDateString()}
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <Link
                                        href={`/admin/services/edit/${service.id}`}
                                        className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => toggleStatus(service.id)}
                                        className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                                    >
                                        {service.status === 'active' ? 'Deactivate' : 'Activate'}
                                    </button>
                                </div>
                                <button
                                    onClick={() => setShowDeleteModal(service.id)}
                                    className="text-red-600 hover:text-red-900 text-sm font-medium"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">Delete Service</h3>
                            <div className="mt-2 px-7 py-3">
                                <p className="text-sm text-gray-500">
                                    Are you sure you want to delete this service? This action cannot be undone.
                                </p>
                            </div>
                            <div className="items-center px-4 py-3">
                                <div className="flex space-x-3">
                                    <button
                                        onClick={() => handleDelete(showDeleteModal)}
                                        className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => setShowDeleteModal(null)}
                                        className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default ServicesAdmin;