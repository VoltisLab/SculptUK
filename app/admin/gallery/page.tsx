'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AdminLayout from '../../../components/admin/AdminLayout';

interface GalleryImage {
    id: number;
    url: string;
    title: string;
    description: string;
    category: string;
    status: 'active' | 'draft';
    uploadedAt: string;
}

const GalleryAdmin: React.FC = () => {
    const [images, setImages] = useState<GalleryImage[]>([
        {
            id: 1,
            url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/ihloolf0_SnapInsta.to_551071066_17881781061389543_540253133835019875_n%20%281%29.jpg',
            title: 'Facial Enhancement Treatment',
            description: 'Professional facial balancing and contouring procedure',
            category: 'facial-treatments',
            status: 'active',
            uploadedAt: '2024-01-15'
        },
        {
            id: 2,
            url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/8mgyab49_SnapInsta.to_551071066_17881781061389543_540253133835019875_n.jpg',
            title: 'Advanced Aesthetic Procedure',
            description: 'Expert application of dermal fillers for natural enhancement',
            category: 'facial-treatments',
            status: 'active',
            uploadedAt: '2024-01-14'
        },
        {
            id: 3,
            url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/ab6099j8_SnapInsta.to_551485792_17881805115389543_3605467977758722625_n.jpg',
            title: 'Precision Treatment',
            description: 'Detailed aesthetic enhancement with professional precision',
            category: 'procedures',
            status: 'active',
            uploadedAt: '2024-01-13'
        },
        {
            id: 4,
            url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/prqp1vtj_SnapInsta.to_551056968_17881765797389543_2910706867156139896_n.jpg',
            title: 'Professional Care',
            description: 'Expert hands delivering exceptional aesthetic results',
            category: 'procedures',
            status: 'active',
            uploadedAt: '2024-01-12'
        },
        {
            id: 5,
            url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/s462sjsw_SnapInsta.to_552081996_17881765785389543_5482520383614813895_n.jpg',
            title: 'Aesthetic Excellence',
            description: 'State-of-the-art facial enhancement techniques',
            category: 'facial-treatments',
            status: 'draft',
            uploadedAt: '2024-01-11'
        }
    ]);

    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null);

    const categories = [
        { id: 'all', label: 'All Images' },
        { id: 'facial-treatments', label: 'Facial Treatments' },
        { id: 'procedures', label: 'Procedures' },
        { id: 'consultations', label: 'Consultations' },
        { id: 'clinic-spaces', label: 'Our Clinic' }
    ];

    const filteredImages = selectedCategory === 'all' 
        ? images 
        : images.filter(img => img.category === selectedCategory);

    const handleDelete = (id: number) => {
        setImages(images.filter(img => img.id !== id));
        setShowDeleteModal(null);
    };

    const toggleStatus = (id: number) => {
        setImages(images.map(img => 
            img.id === id 
                ? { ...img, status: img.status === 'active' ? 'draft' : 'active' }
                : img
        ));
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'facial-treatments': return 'bg-blue-100 text-blue-800';
            case 'procedures': return 'bg-green-100 text-green-800';
            case 'consultations': return 'bg-yellow-100 text-yellow-800';
            case 'clinic-spaces': return 'bg-purple-100 text-purple-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <AdminLayout>
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-light text-gray-900 mb-2">Gallery Management</h1>
                        <p className="text-gray-600">Manage your portfolio images and categories</p>
                    </div>
                    <Link 
                        href="/admin/gallery/upload"
                        className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        Upload Images
                    </Link>
                </div>
            </div>

            {/* Category Filters */}
            <div className="mb-6">
                <div className="flex space-x-2 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                                selectedCategory === category.id
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {category.label} ({category.id === 'all' ? images.length : images.filter(img => img.category === category.id).length})
                        </button>
                    ))}
                </div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image) => (
                    <div key={image.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        {/* Image */}
                        <div className="aspect-square relative overflow-hidden">
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 left-2">
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(image.category)}`}>
                                    {image.category.replace('-', ' ')}
                                </span>
                            </div>
                            <div className="absolute top-2 right-2">
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                    image.status === 'active' 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {image.status}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-1">{image.title}</h3>
                            <p className="text-xs text-gray-600 mb-3 line-clamp-2">{image.description}</p>
                            
                            <div className="text-xs text-gray-500 mb-3">
                                Uploaded: {new Date(image.uploadedAt).toLocaleDateString()}
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <Link
                                        href={`/admin/gallery/edit/${image.id}`}
                                        className="text-indigo-600 hover:text-indigo-900 text-xs font-medium"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => toggleStatus(image.id)}
                                        className="text-gray-600 hover:text-gray-900 text-xs font-medium"
                                    >
                                        {image.status === 'active' ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                                <button
                                    onClick={() => setShowDeleteModal(image.id)}
                                    className="text-red-600 hover:text-red-900 text-xs font-medium"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredImages.length === 0 && (
                <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No images found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {selectedCategory === 'all' 
                            ? 'Get started by uploading your first image.' 
                            : `No images found in the ${categories.find(c => c.id === selectedCategory)?.label} category.`}
                    </p>
                    <div className="mt-6">
                        <Link
                            href="/admin/gallery/upload"
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            Upload Images
                        </Link>
                    </div>
                </div>
            )}

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
                            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">Delete Image</h3>
                            <div className="mt-2 px-7 py-3">
                                <p className="text-sm text-gray-500">
                                    Are you sure you want to delete this image? This action cannot be undone.
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

export default GalleryAdmin;